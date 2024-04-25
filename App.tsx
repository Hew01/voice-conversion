import { loadFonts } from 'theme/fonts';
import {NavigationContainer, NavigationContainerRef, ParamListBase, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeView from 'views/HomeView';
import FirstStepView from 'views/FirstStepView'
import SecondStepView from 'views/SecondStepView';
import FinishedView from 'views/FinishedView';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = loadFonts();
  if (!fontsLoaded) {
    return <></>
  }
  else
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="HomeView" 
                    component={HomeView}
                    options={{animation: 'slide_from_bottom'}}>
                </Stack.Screen>
                <Stack.Screen
                    name="FirstStep" 
                    component={FirstStepView}
                    options={{animation: 'slide_from_right'}}>
                </Stack.Screen>
                <Stack.Screen
                    name="SecondStep" 
                    component={SecondStepView}
                    options={{animation: 'slide_from_right'}}>
                </Stack.Screen>
                <Stack.Screen
                    name="Finished" 
                    component={FinishedView}
                    options={{animation: 'slide_from_right'}}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
)}
