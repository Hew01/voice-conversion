import { useFonts } from 'expo-font';

export const loadFonts = () => {
  return useFonts({
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
    'app_icons': require('../../assets/fonts/app_icons.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
  });
};
