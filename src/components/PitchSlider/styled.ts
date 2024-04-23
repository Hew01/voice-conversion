import styled from 'styled-components/native'
import { colors, fontSize, spacing } from 'theme/theme'
import CustomIcon from 'theme/icons'
import Slider from '@react-native-community/slider';

export const Section = styled.View`
    padding: 0 ${spacing.space_30}px;
    margin: 20px 0;
`

export const SectionTitle = styled.Text`
    font-size: ${fontSize.size_24};
    font-family: 'Poppins-SemiBold';
    color: ${colors.primaryLightGreyHex};
`

export const CustomSlider = styled(Slider)`
    width: 250px;
    height: 60px;
`