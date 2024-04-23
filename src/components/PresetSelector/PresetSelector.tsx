import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from 'theme/theme';
import { Section, SectionTitle } from './styled';


const PresetSelector = () => {
    const [preset, setPreset] = useState(0);
    return (
        <>
            <Section>
                <SectionTitle>Select the preset</SectionTitle>
                <Picker 
                    selectedValue={preset}
                    placeholder={'Select'}
                    onValueChange={(itemValue) => 
                        setPreset(itemValue)
                }>
                    <Picker.Item label="Fast" value="fast"/>    
                    <Picker.Item label="Ultra Fast" value="ultra_fast"/>    
                    <Picker.Item label="Standard" value="standard"/>    
                    <Picker.Item label="High Quality" value="high_quality"/>    
                </Picker>
            </Section>
        </>
    )
}

export default PresetSelector

const styles = StyleSheet.create({})