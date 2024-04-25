import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeTitle, ScreenContainer } from './styled'
import { StatusBar } from 'expo-status-bar'
import MusicPlayer from 'components/MusicPlayer/MusicPlayer'
import HandleButton from 'components/Button/HandleButton'

const FinishedView = () => {
  return (
    <ScreenContainer style={{justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar style="dark" translucent backgroundColor="transparent"/>
      <HomeTitle>Here's the result: </HomeTitle>
      <MusicPlayer/>
      <HandleButton screen='Finished'/>
    </ScreenContainer>
  )
}

export default FinishedView

const styles = StyleSheet.create({})