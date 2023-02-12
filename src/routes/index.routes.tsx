import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackPramsList } from "./types";

import { Home } from "../screens/Home";
import { MyProducts } from "../screens/MyProducts";
import { Finish } from "../screens/Finish";
import { InfoProduct } from "../screens/InfoProduct";

const Stack = createNativeStackNavigator<StackPramsList>();

export default function Routes() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="MyProducts"
        component={MyProducts}
      />

      <Stack.Screen
        name="Finish"
        component={Finish}
      />

      <Stack.Screen
        name="InfoProduct"
        component={InfoProduct}
      />

    </Stack.Navigator>

  )
}