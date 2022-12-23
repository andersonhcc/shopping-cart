import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { MyProducts } from "../screens/MyProducts";

const Stack = createNativeStackNavigator();


export type StackPramsList = {
  Home: undefined;
  MyProducts: undefined;
};


export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyProducts" component={MyProducts} />

    </Stack.Navigator>

  )
}