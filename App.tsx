import React, { useCallback, useMemo } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';

import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components";
import theme from './src/styles/theme';

import { Context } from './src/context';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";


SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;




  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle='light-content'
      translucent
      backgroundColor={"transparent"}
      />
      <NavigationContainer>
        <Context>
          <Routes />
        </Context>

      </NavigationContainer>
    </ThemeProvider>
  );
}

