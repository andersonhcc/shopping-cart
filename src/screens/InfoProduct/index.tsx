import React from 'react';
import { StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useProducts } from '../../context';

import { IProducts } from '../../context';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  IconBack,
  WrapperImage,
  ImageFood,
  Main,
  Details,
  Title,
  LabelDescription,
  SubTitle,
  Footer,
} from './styles';

interface Params {
  item: IProducts
}

export function InfoProduct() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { params } = useRoute();
  const { item } = params as Params;
  const { addItemCar } = useProducts();

  function handleAddProduct(){
    addItemCar(item);
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor={"transparent"}
      />
      <Header>
        <IconBack onPress={() => navigation.goBack()} />
        <WrapperImage>
          <ImageFood source={{ uri: item.banner }} />
        </WrapperImage>
      </Header>

      <Main>
        <Details>
          <Title>{item.name}</Title>
          <LabelDescription>Sobre esse produto</LabelDescription>
          <SubTitle>{item.description}</SubTitle>
        </Details>

      </Main>

      <Footer>
        <Button 
          title={"Colocar no carrinho"}
          onPress={handleAddProduct}
          backgroundColor={theme.colors.background_secondary}
          width={310}
          height={55}
        />
      </Footer>

    </Container>
  );
}