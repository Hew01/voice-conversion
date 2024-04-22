import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { borderRadius, colors, fontSize, spacing } from "theme/theme";
import CustomIcon from 'theme/icons'

const cardWidth = Dimensions.get('window').width * 0.32;

export const CardImageBG = styled.ImageBackground`
    width: ${cardWidth}px;
    height: ${cardWidth}px;
    border-radius: ${borderRadius.radius_20}px;
    margin-bottom: ${spacing.space_15}px;
    overflow: hidden;
`

export const CardName = styled.Text`
    font-family: 'Poppins-Medium';
    color: ${colors.primaryWhiteHex};
    font-size: ${fontSize.size_16};
`

export const Section = styled.View`
    padding: 0 ${spacing.space_30}px;
    margin: 20px 0;
`

export const SectionTitle = styled.Text`
    font-size: ${fontSize.size_24};
    font-family: 'Poppins-SemiBold';
    color: ${colors.primaryLightGreyHex};
`

export const SelectFile = styled.TouchableOpacity`
    height: 50px;
    border-radius: 15px;
    background-color: ${colors.primaryGreyHex};
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
`

export const SectionText = styled.Text`
    font-size: ${fontSize.size_16};
    font-family: 'Poppins-Medium';
    color: ${colors.primaryWhiteHex};
`

export const Icon = styled(CustomIcon)`
    margin-right: 20px;
`

export const ErrorText = styled.Text`
    font-size: ${fontSize.size_16};
    font-family: 'Poppins-Medium';
    color: ${colors.primaryRedHex};
    margin-top: 10px;
`