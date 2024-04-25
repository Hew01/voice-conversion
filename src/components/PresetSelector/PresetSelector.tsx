import { StyleSheet } from 'react-native'
import React from 'react'
import { CustomPicker, PickerLabel, Section, SectionTitle } from './styled';
import { useStore } from 'store/store';

const PresetSelector = () => {
    const setVoiceInput = useStore((state: any) => state.setVoiceInput);

    return (
        <>
            <Section>
                <SectionTitle>Select the preset</SectionTitle>
                <CustomPicker 
                    onValueChange={(itemValue: any) => {
                        // Immediately store the selected value in the Zustand store
                        setVoiceInput({preset: itemValue});
                    }}
                >
                    <PickerLabel label="Standard" value="standard"/>    
                    <PickerLabel label="Fast" value="fast"/>    
                    <PickerLabel label="Ultra Fast" value="ultra_fast"/>    
                    <PickerLabel label="High Quality" value="high_quality"/>    
                </CustomPicker>
            </Section>
        </>
    )
}

export default PresetSelector

const styles = StyleSheet.create({})
