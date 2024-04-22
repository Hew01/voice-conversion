import styled from 'styled-components/native'
import { colors, fontSize, spacing } from 'theme/theme'

export const ScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.primaryBlackHex};
`

export const HomeTitle = styled.Text`
    font-size: ${fontSize.size_46};
    font-family: 'Poppins-SemiBold';
    color: ${colors.primaryWhiteHex};
    align-content: center;
`

export const ScreenTitle = styled.Text`
    font-size: ${fontSize.size_30};
    font-family: 'Poppins-SemiBold';
    color: ${colors.primaryWhiteHex};
    padding-left: ${spacing.space_30};
`

export const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: 30;
    left: 0;
    right: 0;
    height: 60px;
    margin: 0 40px;
    border-radius: 15px;
    background-color: ${colors.primaryOrangeHex};
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text`
    font-size: ${fontSize.size_18};
    font-family: 'Poppins-SemiBold';
    color: white;
`