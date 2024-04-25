import styled from 'styled-components/native'
import { colors, fontSize, spacing } from 'theme/theme'

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