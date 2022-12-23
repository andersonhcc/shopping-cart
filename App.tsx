import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
      
      <Routes />

    </NavigationContainer>
  );
}

