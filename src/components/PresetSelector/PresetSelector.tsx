import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CustomPicker, PickerLabel, Section, SectionTitle } from './styled';


const PresetSelector = () => {
    const [preset, setPreset] = useState(0);
    return (
        <>
            <Section>
                <SectionTitle>Select the preset</SectionTitle>
                <CustomPicker 
                    selectedValue={preset}
                    placeholder={'Select'}
                    onValueChange={(itemValue: any) => 
                        setPreset(itemValue)
                }>
                    <PickerLabel label="Fast" value="fast"/>    
                    <PickerLabel label="Ultra Fast" value="ultra_fast"/>    
                    <PickerLabel label="Standard" value="standard"/>    
                    <PickerLabel label="High Quality" value="high_quality"/>    
                </CustomPicker>
            </Section>
        </>
    )
}

export default PresetSelector

const styles = StyleSheet.create({})