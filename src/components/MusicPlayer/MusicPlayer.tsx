import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { CustomSlider, PlayButton, Player, Time } from './styled';
import FontAwesome from '@expo/vector-icons/FontAwesome'

const MusicPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [totalLength, setTotalLength] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
    {/* {(!isLoading) ? ( */}
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
    {/* ) : (
      <Time>Waiting for the file to be done...</Time>
    )}    */}
    </>
  );
};

export default MusicPlayer;

// useEffect(() => {
//   const loadAudio = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('http://localhost:YOUR_PORT/YOUR_PATH');
//       const audioFileUrl = response.data;
//       const { sound } = await Audio.Sound.createAsync({ uri: audioFileUrl });
//       setSound(sound);
//       sound.setOnPlaybackStatusUpdate((status) => {
//         if (status.isLoaded) {
//           setTotalLength(status.durationMillis ? status.durationMillis / 1000 : 0);
//           setSliderValue(status.positionMillis ? status.positionMillis / 1000 : 0);
//         }
//       });
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);  
//     }
//   };

//   loadAudio();
// }, []);