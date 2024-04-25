import styled from 'styled-components/native'
import { colors, fontSize, spacing } from 'theme/theme'
import CustomIcon from 'theme/icons'
import { Picker } from '@react-native-picker/picker'

export const Section = styled.View`
    padding: 0 ${spacing.space_30}px;
    margin: 20px 0;
`

export const SectionTitle = styled.Text`
    font-size: ${fontSize.size_24};
    font-family: 'Poppins-SemiBold';
    color: ${colors.primaryLightGreyHex};
`

export const CustomPicker = styled(Picker)`
    height: 50px;
    border-radius: 15px;
    margin-top: 20px;
    background-color: ${colors.primaryGreyHex};
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    font-size: ${fontSize.size_16};
    font-family: 'Poppins-Medium';
    color: ${colors.primaryWhiteHex};
`

export const PickerLabel = styled(Picker.Item)`
    font-size: ${fontSize.size_16};
    font-family: 'Poppins-Medium';
    color: ${colors.primaryWhiteHex};
`