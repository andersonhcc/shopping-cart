import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { StackPramsList } from '../../routes/index.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useProducts } from '../../context';


import { products } from '../../utils/products';
import { ListProducts } from '../../components/ListProducts';

export interface DataProducts {
  id: string;
  name: string;
  price: number;
  amount?: number;
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
  const [amountAll, setAmountAll] = useState(0);
  const [priceAll, setPriceAll] = useState(0);
  const { itemsCar, setItemsCar } = useProducts();

  function handleAddProducts(products: DataProducts) {
    
    setItemsCar((prevState) => {
      const newProduct = [...prevState];
      const productIndex = prevState.findIndex(item => item.id === products.id);



      if(productIndex < 0){
        
        return [...newProduct, {
          ...products,
          amount: 1,
        }]
        
      }

      const item = newProduct[productIndex];

      newProduct[productIndex] = {
        name: item.name,
        price: item.price,
        id: item.id,
        amount: Number(item.amount) + 1,
      }

      return newProduct;
    
    });

    const quantityAll = itemsCar.reduce((acc, carItem) => {
      return acc + carItem.amount
    },1)

    setAmountAll(quantityAll)
    setVisible(true)

  }



  function handleMyProducts() {
    navigation.navigate('MyProducts');
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
              <TitleQuantity>{amountAll}</TitleQuantity>
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