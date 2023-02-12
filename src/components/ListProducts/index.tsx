import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  Details,
  Price,
  ButtonAddCarProduct,
  Banner,
  Wrapper,
  ButtonBanner,
} from './styles';

import { Props } from './types';

export function ListProducts({
  data,
  setProductCar,
  viewProductCar
}: Props) {


  return (
    <Container>
      <ButtonBanner onPress={viewProductCar}>
        <Banner source={{ uri: data.banner }} />
      </ButtonBanner>
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