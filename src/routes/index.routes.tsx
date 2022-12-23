import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { MyProducts } from "../screens/MyProducts";

import { DataProducts } from "../screens/Home";

const Stack = createNativeStackNavigator();


export type StackPramsList = {
  Home: undefined;
  MyProducts: {
    item: DataProducts[]
  };
};


export default function Routes() {
  return (
    <Stack.Navigator >

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="MyProducts" component={MyProducts} />

    </Stack.Navigator>

  )
}