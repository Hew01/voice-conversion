import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, ButtonText, ScreenContainer, HomeTitle } from './styled'
import HandleButton from 'components/Button/HandleButton'

const HomeView = () => {
  return (
    <ScreenContainer style={{justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <HomeTitle>Get voice changed{'\n'}right away!</HomeTitle>
      <HandleButton screen='HomeView'/>
    </ScreenContainer>
  )
}

export default HomeView