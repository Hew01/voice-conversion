import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from 'store/store';
import { spacing } from 'theme/theme';
import VoiceCard from './VoiceCard';
import { Section, SectionTitle } from './styled';

type VoicePack = {
  id: number;
  name: string;
  avatar: string;
  fileDirectory: string;
};

const ModelSelector = () => {
  const voicePackList = useStore((state: any) => state.voicePackList) || []; // Default to an empty array if voicePackList is undefined
  const setVoiceInput = useStore((state: any) => state.setVoiceInput);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState< any | null>(null);
 // Add a new state for selectedItem

  console.log(voicePackList);
  // Update selectedItem whenever selectedId changes
  useEffect(() => {
    console.log(selectedId);
    const item = voicePackList.find((item: VoicePack) => item.id === selectedId);
    if (item) {
      console.log(item);
      console.log(item.fileDirectory);
      setVoiceInput({model: item.fileDirectory})
      setSelectedItem(item);
    }
  }, [selectedId]);

  return (
    <Section>
      <SectionTitle>Pick your model</SectionTitle>
        <FlatList
          horizontal showsHorizontalScrollIndicator={false}
          data={voicePackList}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item && item.id}
          renderItem={({item}) => {
            return item && <VoiceCard
                id={item.id}
                name={item.name}
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
