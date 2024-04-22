import { StatusBar } from 'expo-status-bar'
import { Button, ButtonText, ScreenContainer, ScreenTitle } from './styled'
import React from 'react'
import MyDocumentPicker from 'components/DocumentPicker/MyDocumentPicker'
import ModelSelector from 'components/ModelSelector/ModelSelector'

const FirstStepView = ({navigation}: {navigation: any}) => {
  return (
    <ScreenContainer>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <ScreenTitle style={{marginTop: 80, marginBottom: 30}}>First step</ScreenTitle>
      <MyDocumentPicker/>
      <ModelSelector/>
      <Button onPress={() => navigation.navigate('FirstStep')}>
        <ButtonText>Next</ButtonText>
      </Button>
    </ScreenContainer>
  )
}

export default FirstStepView