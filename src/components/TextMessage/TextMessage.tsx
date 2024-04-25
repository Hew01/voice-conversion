import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Section, SectionTitle, TextContainer, TextInput } from './styled'
import { colors } from 'theme/theme'
import { useStore } from 'store/store'; // Import useStore from your store

const TextMessage = () => {
    const setVoiceInput = useStore((state: any) => state.setVoiceInput); // get setVoiceInput from the store

    return (
        <Section>
            <SectionTitle>Provide a sample message </SectionTitle>
            <TextContainer>
                <TextInput
                    placeholder='Type message here'
                    placeholderTextColor={colors.primaryLightGreyHex}
                    onChangeText={(text) => {
                        // Immediately store the updated text value in the Zustand store
                        setVoiceInput({message: text});
                    }}
                />
            </TextContainer>
        </Section>
    )
}

export default TextMessage

const styles = StyleSheet.create({})
