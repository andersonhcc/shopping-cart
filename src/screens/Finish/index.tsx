import React from 'react';
import { Animated } from 'react-native';

import Done from '../../assets/images/Done.svg';
import { Button } from '../../components/Button';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackPramsList } from '../../routes/index.routes';


import {
  Container,
  Main,
  BoxIcon,
  Title,
  SubTitle,
  Footer
} from './styles';


export function Finish() {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  function handleHome(){
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Main>
        <BoxIcon>
          <Done />
        </BoxIcon>

        <Title>Pedido finalizado!</Title>
        <SubTitle>Por favor, se diriga até o caixa {"\n"}para efetuar o pagamento!</SubTitle>
      </Main>

      <Footer>
        
        <Button
          title='Novo pedido'
          backgroundColor={theme.colors.background_secondary}
          onPress={handleHome}
        />

      </Footer>

    </Container>
  );
}