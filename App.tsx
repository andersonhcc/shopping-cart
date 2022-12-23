import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';

import { Context } from './src/context';

export default function App() {
  return (
    <NavigationContainer>
      <Context>
        <Routes />
      </Context>

    </NavigationContainer>
  );
}

