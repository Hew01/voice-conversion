import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';
import { colors } from 'theme/theme';

const PitchSlider = () => {
    const [range, setRange] = useState(0);
    return (
        <Slider
            minimumValue={-20}
            maximumValue={20}
            minimumTrackTintColor={colors.primaryOrangeHex}
            maximumTrackTintColor={colors.primaryGreyHex}
            thumbTintColor={colors.primaryOrangeHex}
            value={1}
            onValueChange={value => setRange(value)}
        />
    )
}

export default PitchSlider

const styles = StyleSheet.create({})