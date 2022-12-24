import React from 'react';
import { FlatList } from 'react-native';

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import { useProducts } from '../../context';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackPramsList } from '../../routes/index.routes';

import { CarItems } from '../../components/CarItems';
import { Button } from '../../components/Button';

import {
  Container,
  PriceAll,
  Header,
  ButtonBack,
  Title,
  ButtonDelete,
  WrapperPrice,
  LabelPrice,
  LabelDefault,
  WrapperDefault,
  ButtonFinish,
  TitleButton,
  Footer,
  WrapperPriceAll,
} from './styles';


export function MyProducts() {

  const { itemsCar, addItemCar, removeItem, total } = useProducts();
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  function handleFinishPage(){
    navigation.navigate('Finish')
  }

  return (
    <Container>

      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={25}
            color={theme.colors.main}

          />
        </ButtonBack>

        <Title>Meu carrinho</Title>

        <ButtonDelete>
          <SimpleLineIcons
            name="trash"
            size={28}
            color={theme.colors.main}
          />
        </ButtonDelete>
      </Header>

      <FlatList
        data={itemsCar}
        contentContainerStyle={{ alignItems: 'center', flexGrow: 1, paddingBottom: 100, }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <CarItems
            data={item}
            addAmount={() => addItemCar(item)}
            removeItem={() => removeItem(item)}
          />

        )}

        ListFooterComponent={() =>
          <WrapperPrice>
            {itemsCar.length !== 0 &&
              <Footer>
                <WrapperPriceAll>
                <LabelPrice>Valor total:</LabelPrice>
                <PriceAll> R${total}</PriceAll>
                </WrapperPriceAll>

                <Button 
                  title="Finalizar"
                  style={{ marginTop: 30}}
                  width={250}
                  height={50}
                  backgroundColor={theme.colors.background_secondary}
                  onPress={handleFinishPage}
                />
              </Footer>
            }
          </WrapperPrice>
        }

        ListEmptyComponent={() =>
          <WrapperDefault>
            <LabelDefault>Não há produtos no seu carrinho</LabelDefault>
          </WrapperDefault>
        }
      />




    </Container>
  );
}