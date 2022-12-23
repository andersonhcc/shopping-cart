import React from 'react';
import { FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { Container, Title } from './styles';

import { DataProducts } from '../Home';

interface Params {
  item: DataProducts[];
}



export function MyProducts() {
  const { params } = useRoute();
  const { item } = params as Params;

  
  return (
    <Container>
      
      <FlatList 
        data={item}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Title>{item.name}</Title> 
        )}
      />
     

    </Container>
  );
}