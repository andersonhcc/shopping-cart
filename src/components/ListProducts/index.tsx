import React from 'react';
import { Feather } from '@expo/vector-icons';

import { DataProducts } from '../../screens/Home';

import {
  Container,
  Title,
  Details,
  Price,
  ButtonAddCarProduct,
} from './styles';


interface IProducts {
  data: DataProducts
  setProductCar:(value: DataProducts) => void;
}

export function ListProducts({ data, setProductCar }: IProducts) {
  return (
    <Container>
      <Details>
      <Title>{data.name}</Title>
      <Price>R$ {data.price}</Price>
      </Details>

      <ButtonAddCarProduct onPress={() => setProductCar(data)}>
        <Feather 
          name="plus"
          size={20}
          color="#29292e"
        />
      </ButtonAddCarProduct>



    </Container>
  );
}