import styled from 'styled-components/native'
import Slider from '@react-native-community/slider';
import { colors, fontSize, spacing } from 'theme/theme';

export const CustomSlider = styled(Slider)`
    width: 250px;
    height: 60px;
    align-content: center;
`

export const PlayButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
`

export const Time = styled.Text`
    color: ${colors.primaryWhiteHex};
    font-size: ${fontSize.size_16};
    font-family: 'Poppins-Medium';
`

export const Player = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: ${spacing.space_10};
    align-items: center;    
`