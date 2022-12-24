import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, TextButtonAcess, Indicator } from './styles';

interface PropsButton extends TouchableOpacityProps{
  marginTop?: number;
  backgroundColor?: string;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number;
  height?: number;
}

export function Button({
  marginTop, 
  width,
  height,
  title, 
  backgroundColor, 
  isLoading,
  disabled,
  ...props} 
: PropsButton){
  return (
    <Container
      marginTop={marginTop}
      disabled={disabled}
      activeOpacity={0.5}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      {...props}
    >
      {
      isLoading ? 
        <Indicator /> 
        : 
        <TextButtonAcess>{title}</TextButtonAcess>
     }

      

    </Container>
  );
}