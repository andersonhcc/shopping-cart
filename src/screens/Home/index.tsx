import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackPramsList } from '../../routes/index.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { products } from '../../utils/products';
import { ListProducts } from '../../components/ListProducts';

export interface DataProducts {
  id: string;
  name: string;
  price: number;

}

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
  const [visibile, setVisible] = useState(false);
  const [data, setData] = useState<DataProducts[]>([]);
  const [amount, setAmount] = useState(0);

  function handleAddProducts(products: DataProducts) {
    setVisible(true);
    setData(prevState => [...prevState, products]);
  }

  function handleMyProducts() {
    navigation.navigate('MyProducts', { item: data });
  }

  return (
    <Container>
      <Header>
        <Title>Lista de produtos</Title>

        <ButtonCloseRequest onPress={handleMyProducts}>
          <Feather
            size={30}
            name="shopping-cart"
          />

          {visibile &&
            <IndicatorQuantity>
              <TitleQuantity>1</TitleQuantity>
            </IndicatorQuantity>
          }
        </ButtonCloseRequest>
      </Header>

      <Main>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <ListProducts
              data={item}
              setProductCar={() => handleAddProducts(item)}
            />

          )}
        />
      </Main>

    </Container>
  );
}