import React from 'react';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StackPramsList } from '../../routes/index.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useProducts } from '../../context';

import { products } from '../../utils/products';
import { ListProducts } from '../../components/ListProducts';

import { IProducts } from '../../context';

import {
  Container,
  Header,
  Title,
  ButtonCloseRequest,
  IndicatorQuantity,
  TitleQuantity,
  Main,

} from './styles';

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
  const { itemsCar, addItemCar } = useProducts();
  const theme = useTheme();

  function handleAddProducts(products: IProducts) {
    addItemCar(products)

  }

  function handleInfoProduct(products: IProducts) {
    navigation.navigate('InfoProduct', { item: products })

  }

  function handleMyProducts() {
    navigation.navigate('MyProducts');
  }

  return (
    <Container>
      <Header>
        <Title>Nossos produtos</Title>

        <ButtonCloseRequest onPress={handleMyProducts}>
          <Feather
            size={30}
            name="shopping-cart"
            color={theme.colors.main}
          />
          {itemsCar?.length >= 1 && (
            <IndicatorQuantity>
              <TitleQuantity>{itemsCar?.length}</TitleQuantity>
            </IndicatorQuantity>
          )}
        </ButtonCloseRequest>

      </Header>

      <Main>
        <FlatList
          data={products}
          numColumns={2}
          contentContainerStyle={{
            flexDirection: 'column',
            paddingBottom: 200,
          }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <ListProducts
              data={item}
              setProductCar={() => handleAddProducts(item)}
              viewProductCar={() => handleInfoProduct(item)}
            />


          )}
        />
      </Main>

    </Container>
  );
}