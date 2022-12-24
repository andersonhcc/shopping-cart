import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from "styled-components";

import { IProducts } from "../context";

import { Home } from "../screens/Home";
import { MyProducts } from "../screens/MyProducts";


const Stack = createNativeStackNavigator();


export type StackPramsList = {
  Home: undefined;
  MyProducts: {
    item: IProducts[]
  };
};


export default function Routes() {
  const theme = useTheme();
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>

      <Stack.Screen name="Home" component={Home} />
      
      <Stack.Screen 
        name="MyProducts" 
        component={MyProducts} 
     
        
        />

    </Stack.Navigator>

  )
}