import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Section, SectionTitle, TextContainer, TextInput } from './styled'
import { colors } from 'theme/theme'

const TextMessage = () => {
    const [voiceMessage, setVoiceMessage] = useState('');
    return (
        <Section>
            <SectionTitle>Provide a sample message </SectionTitle>
            <TextContainer>
                <TextInput
                    placeholder='Type message here'
                    value={voiceMessage}
                    placeholderTextColor={colors.primaryLightGreyHex}
                    onChangeText={setVoiceMessage}
                />
            </TextContainer>
        </Section>
    )
}

export default TextMessage

const styles = StyleSheet.create({})