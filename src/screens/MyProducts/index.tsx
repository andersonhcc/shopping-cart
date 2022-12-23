import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { useProducts } from '../../context';

import { CarItems } from '../../components/CarItems';

import {
  Container,
  PriceAll,
} from './styles';


export function MyProducts() {

  const { itemsCar, addItemCar, removeItem, total } = useProducts();

  return (
    <Container>

      <FlatList
        data={itemsCar}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          
          <CarItems 
          data={item}
          addAmount= {() => addItemCar(item)}
          removeItem={() => removeItem(item)}
          />

        )}
      />

      <PriceAll>R$ {total}</PriceAll>


    </Container>
  );
}