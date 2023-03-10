import React, { useState } from 'react';

import {
  Container,
  Details,
  Title,
  Price,
  AmountProduct,
  Buttons,
  ButtonAdd,
  TitleButton,
  ButtonRemove,
  ImageItem,
  WrapperData,
} from './styles';

import { Props } from './types';

export function CarItems({
  data,
  addAmount,
  removeItem
}: Props) {

  const [amount, setAmount] = useState(data?.amount);

  function handleMoreAmount() {
    setAmount(item => item + 1);
    addAmount();
  }

  function handleRemoveItem() {
    removeItem();

    if (amount === 0) {
      setAmount(0);
      return
    }

    setAmount(item => item - 1);
  }
  return (
    <Container>
      <Details>
        <ImageItem source={{ uri: data.banner }} />

        <WrapperData>
          <Title>{data.name}</Title>
          <Price>R${data.price}</Price>
          <AmountProduct>x{amount}</AmountProduct>
        </WrapperData>

      </Details>

      <Buttons>
        <ButtonRemove onPress={handleRemoveItem}>
          <TitleButton>-</TitleButton>
        </ButtonRemove>
        <ButtonAdd onPress={handleMoreAmount}>
          <TitleButton>+</TitleButton>
        </ButtonAdd>
      </Buttons>
    </Container>
  );
}