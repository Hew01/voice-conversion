import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { borderRadius, colors, fontSize, spacing } from 'theme/theme';
import { CardImageBG, CardName } from './styled';
import Icons from 'theme/icons';

interface VoiceCardProps {
  id: number;
  name: string;
  avatar: ImageSourcePropType | undefined;
  isSelected: any;
  onSelected: any;
}

const VoiceCard: React.FC<VoiceCardProps> = ({
  id,
  name,
  avatar,
  isSelected,
  onSelected,
}) => {
  const highlighted = isSelected && styles.highlight;
  return (
    <TouchableOpacity onPress={() => onSelected(id)}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.primaryGreyHex, colors.primaryBlackHex]}
        style={[styles.cardBackground, highlighted]}>
        <CardImageBG source={avatar} resizeMode='cover'/>
        <CardName>{name}</CardName>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default VoiceCard

const styles = StyleSheet.create({
  highlight: {
    borderColor: 'rgba(0, 123, 255, 0.75)',
    borderWidth: 2,
    borderRadius: 25,
  },
  cardBackground: {
    padding: spacing.space_15,
    borderRadius: borderRadius.radius_25,
  }
})