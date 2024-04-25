import { StatusBar } from 'expo-status-bar'
import { Button, ButtonText, ScreenContainer, ScreenTitle } from './styled'
import React from 'react'
import TextMessage from 'components/TextMessage/TextMessage'
import PresetSelector from 'components/PresetSelector/PresetSelector'
import PitchSlider from 'components/PitchSlider/PitchSlider'
import HandleButton from 'components/Button/HandleButton'

const SecondStepView = () => {
  return (
    <ScreenContainer>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <ScreenTitle style={{marginTop: 80, marginBottom: 30}}>Second step</ScreenTitle>
      <TextMessage/>
      <PresetSelector/>
      <PitchSlider/>
      <HandleButton screen='SecondStep'/>
    </ScreenContainer>
  )
}

export default SecondStepView