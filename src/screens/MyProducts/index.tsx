import React from 'react';
import { FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import {
  Container,
  Title,
  Main,
  Details,
  Price,
  AmountProduct,
  Buttons,
  ButtonAdd,
  ButtonRemove,
  TitleButton,
  PriceAll,
} from './styles';

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
          <Main>
            <Details>
              <Title>{item.name}</Title>
              <Price>R${item.price}</Price>
              <AmountProduct>30</AmountProduct>
            </Details>

            <Buttons>
              <ButtonAdd>
                <TitleButton>+</TitleButton>
              </ButtonAdd>
              <ButtonRemove>                
                <TitleButton>-</TitleButton>
              </ButtonRemove>
            </Buttons>
          </Main>

        )}
      />

      <PriceAll>R$ 100</PriceAll>


    </Container>
  );
}