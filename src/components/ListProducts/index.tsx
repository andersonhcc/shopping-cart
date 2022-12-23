import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  Details,
  Price,
  ButtonAddCarProduct,
} from './styles';

interface DataProducts {
  id: string;
  name: string;
  price: number;

}

interface IProducts {
  data: DataProducts
  setProductCar:() => void;
}

export function ListProducts({ data, setProductCar }: IProducts) {
  return (
    <Container>
      <Details>
      <Title>{data.name}</Title>
      <Price>R$ {data.price}</Price>
      </Details>

      <ButtonAddCarProduct onPress={setProductCar}>
        <Feather 
          name="plus"
          size={20}
          color="#29292e"
        />
      </ButtonAddCarProduct>



    </Container>
  );
}