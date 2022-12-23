import React from 'react';
import { Feather } from '@expo/vector-icons';

import { IProducts } from '../../context';

import {
  Container,
  Title,
  Details,
  Price,
  ButtonAddCarProduct,
  Banner,
  Wrapper,
} from './styles';


interface Props {
  data: IProducts
  setProductCar: (value: IProducts) => void;
}

export function ListProducts({ data, setProductCar }: Props) {


  return (
    <Container>
      <Banner source={{ uri: data.banner }} />
      <Wrapper>

      <Details>
        <Title>{data.name}</Title>
        <Price>R$ {data.price}</Price>
      </Details>

      <ButtonAddCarProduct onPress={() => setProductCar(data)}>
        <Feather
          name="plus"
          size={20}
          color="white"
        />
      </ButtonAddCarProduct>

      </Wrapper>




    </Container>
  );
}