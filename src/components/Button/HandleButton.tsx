import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonText, LoadingButton } from './styled'
import { NavigationContext } from '@react-navigation/native'
import { useStore } from 'store/store'
import axios from 'axios'

interface buttonProp {
  screen: string,
}

const HandleButton: React.FC<buttonProp> = ({screen}) => {
  const navigation = useContext(NavigationContext);
  const [screenDestination, setScreenDestination] = useState('')
  const [textButton, setTextButton] = useState('')
  const [loading, setLoading] = useState(false);
  const voiceInput = useStore((state: any) => state.voiceInput); // get voicePackList from the store)

  const uploadSettingsToServer = async () => {
    setLoading(true);
    try {
      const rvcResponse = await axios.post('http://localhost:PORT/rvc', {
        audioInput: voiceInput.audioInput,
        pitch: voiceInput.pitch,
        model: voiceInput.model,
      });
      console.log(rvcResponse);
      const tortoiseResponse = await axios.post('http://localhost:PORT/tortoise', {
        message: voiceInput.message,
        preset: voiceInput.preset,
      });
      console.log(tortoiseResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
  }}
  useEffect(() => {
    switch (screen) {
      case 'HomeView':
        setScreenDestination('FirstStep');
        setTextButton('Begin');
        break;
      case 'FirstStep':
        setScreenDestination('SecondStep');
        setTextButton('Continue');
        break;
      case 'SecondStep':
        setScreenDestination('Finished');
        setTextButton('Continue');
        break;
      case 'Finished':
        setScreenDestination('HomeView');
        setTextButton('Return');
        break;
      default:
        // Handle other cases (if needed)
        break;
    }
  }, [screen]);
  const handlePressed = () => {
    if (screen === 'SecondStep')
      uploadSettingsToServer();
    navigation?.navigate(screenDestination);
  }
  return (
    <>
      {(!loading) ? (
          <Button onPress={() => handlePressed()}>
            <ButtonText>{textButton}</ButtonText>
          </Button>
      ) : (
          <LoadingButton disabled>
            <ButtonText>Loading...</ButtonText>
          </LoadingButton>
      )}
    </>
  )
}

export default HandleButton