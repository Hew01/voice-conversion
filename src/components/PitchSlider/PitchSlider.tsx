import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from 'theme/theme';
import { CustomSlider, Section, SectionTitle } from './styled';
import { useStore } from 'store/store';

const PitchSlider = () => {
    const [range, setRange] = useState(0);
    const setVoiceInput = useStore((state: any) => state.setVoiceInput);

    return (
        <>
            <Section>
                <SectionTitle>Select the pitch: {range} </SectionTitle>
                <CustomSlider
                    minimumValue={-20}
                    maximumValue={20}
                    minimumTrackTintColor={colors.primaryOrangeHex}
                    maximumTrackTintColor={colors.primaryGreyHex}
                    thumbTintColor={colors.primaryOrangeHex}
                    value={1}
                    onValueChange={value => setRange(Math.round(value))}
                    onSlidingComplete={() => setVoiceInput({pitch: range})}
                />
            </Section>
        </>
    )
}

export default PitchSlider
