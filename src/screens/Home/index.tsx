import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { StackPramsList } from '../../routes/index.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { products } from '../../utils/products';
import { ListProducts } from '../../components/ListProducts';


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
  const [data, setData] = useState(products);
  const [amount, setAmount] = useState(0);

  function handleAddProducts(){
    setVisible(true)
  }

  function handleMyProducts(){
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
              <TitleQuantity>1</TitleQuantity>
            </IndicatorQuantity>
            }
        </ButtonCloseRequest>
      </Header>

      <Main>
        <FlatList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            
            <ListProducts 
            data={item}
            setProductCar={handleAddProducts}
            />
          
            )}
        />
      </Main>

    </Container>
  );
}