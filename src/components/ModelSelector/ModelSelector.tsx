import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from 'store/store';
import { spacing } from 'theme/theme';
import VoiceCard from './VoiceCard';
import { Section, SectionTitle } from './styled';

const ModelSelector = () => {
  const voicePackList = useStore((state: any) => state.voicePackList); // get voicePackList from the store
  const addVoicePack = useStore((state: any) => state.addVoicePack); // get addVoicePack action from the store

  const [selectedId, setSelectedId] = useState(null);
  return (
    <Section>
      <SectionTitle>Pick your model</SectionTitle>
        <FlatList
          horizontal showsHorizontalScrollIndicator={false}
          data={voicePackList}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <VoiceCard
                id={item.id}
                name={item.name}
                avatar={item.avatar}
                isSelected={item.id === selectedId}
                onSelected={setSelectedId}
              ></VoiceCard>
          }}/>
      </Section>
  )
}

const styles = StyleSheet.create({
  FlatListContainer: {
    gap: spacing.space_20,
    paddingVertical: spacing.space_20,
    paddingHorizontal: spacing.space_30,
  }
})

export default ModelSelector
