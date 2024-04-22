import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, ButtonText, ScreenContainer, HomeTitle } from './styled'

const HomeView = ({navigation}: {navigation: any}) => {
  return (
    <ScreenContainer style={{justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <HomeTitle>Get voice changed{'\n'}right away!</HomeTitle>
      <Button onPress={() => navigation.navigate('FirstStep')}>
        <ButtonText>Get Started</ButtonText>
      </Button>
    </ScreenContainer>
  )
}

export default HomeView