import { StatusBar } from 'expo-status-bar'
import { Button, ButtonText, ScreenContainer, ScreenTitle } from './styled'
import React from 'react'
import MyDocumentPicker from 'components/DocumentPicker/MyDocumentPicker'
import ModelSelector from 'components/ModelSelector/ModelSelector'
import HandleButton from 'components/Button/HandleButton'

const FirstStepView = () => {
  return (
    <ScreenContainer>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <ScreenTitle style={{marginTop: 80, marginBottom: 30}}>First step</ScreenTitle>
      <MyDocumentPicker/>
      <ModelSelector/>
      <HandleButton screen='FirstStep'/>
    </ScreenContainer>
  )
}

export default FirstStepView