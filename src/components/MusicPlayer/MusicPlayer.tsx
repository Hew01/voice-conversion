import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { CustomSlider, PlayButton, Player, Time } from './styled';
import FontAwesome from '@expo/vector-icons/FontAwesome'

const MusicPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [totalLength, setTotalLength] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(require('../../../assets/applause.mp3'));
      setSound(sound);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setTotalLength(status.durationMillis ? status.durationMillis / 1000 : 0);
          setSliderValue(status.positionMillis ? status.positionMillis / 1000 : 0);
        }
      });      
    };

    loadAudio();
    console.log(totalLength);
  }, []);

  const togglePlay = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        await sound.playFromPositionAsync(status.positionMillis ? status.positionMillis : 0);
      }
    }
    setIsPlaying(!isPlaying);
  };
  
  

  const onSlidingStart = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
    }
  };

  const onSlidingComplete = async (value: number) => {
    if (!sound) return;
    await sound.setPositionAsync(value * 1000);
    setSliderValue(value);
    if (isPlaying) {
      await sound.playAsync();
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds - minutes * 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds.toFixed(0)}`;
  };

  return (
    <Player>
      <PlayButton onPress={togglePlay}>
        {isPlaying ? <FontAwesome name="pause" size={30} color="white"/>
        : <FontAwesome name="play" size={30} color="white"/>}
      </PlayButton>
      <CustomSlider
        value={sliderValue}
        minimumValue={0}
        maximumValue={totalLength}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
      />
      <Time>{formatTime(sliderValue)}</Time>
    </Player>
  );
};

export default MusicPlayer;

//   useEffect(() => {
//     axios.get('http://localhost:YOUR_PORT/YOUR_PATH')
//       .then(async response => {
//         const audioFileUrl = response.data;
//         const { sound } = await Audio.Sound.createAsync({ uri: audioFileUrl });
//         setSound(sound);
//         sound.setOnPlaybackStatusUpdate((status) => {
//           if (status.isLoaded && status.playableDurationMillis) {
//             setTotalLength(status.playableDurationMillis / 1000);
//           }
//         });
//       })
//       .catch(error => console.log(error));
//   }, []);