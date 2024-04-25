import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonText } from './styled'
import { NavigationContext } from '@react-navigation/native'

interface buttonProp {
  screen: string,
}

const HandleButton: React.FC<buttonProp> = ({screen}) => {
  const navigation = useContext(NavigationContext);
  const [screenDestination, setScreenDestination] = useState('')
  const [textButton, setTextButton] = useState('')
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
  return (
    <Button onPress={() => navigation?.navigate(screenDestination)}>
      <ButtonText>{textButton}</ButtonText>
    </Button>
  )
}

export default HandleButton

const styles = StyleSheet.create({})