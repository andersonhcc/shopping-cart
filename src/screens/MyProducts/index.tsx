import React from 'react';
import { FlatList } from 'react-native';

import { useProducts } from '../../context';

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

  const { itemsCar, setItemsCar } = useProducts();


  function removeProduct(id: string){

    const indexCar = itemsCar.find(item => item.id === id);

    const index = itemsCar.indexOf(item => item === id);
    if (itemsCar[index].amount) itemsCar[index].amount--
    setItemsCar([...itemsCar])
    
    // let removeItem = itemsCar.filter(item => {
    //   return (item.id !== id);
    // })

    // setItemsCar(removeItem);

   }


  return (
    <Container>

      <FlatList
        data={itemsCar}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Main>
            <Details>
              <Title>{item.name}</Title>
              <Price>R${item.price}</Price>
              <AmountProduct>{item.amount}</AmountProduct>
            </Details>

            <Buttons>
              <ButtonAdd>
                <TitleButton>+</TitleButton>
              </ButtonAdd>
              <ButtonRemove onPress={() => removeProduct(item.id)}>                
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