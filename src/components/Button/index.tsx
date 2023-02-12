import React from 'react';

import { Container, TextButtonAcess, Indicator } from './styles';
import { Props } from './types';

export function Button({
  marginTop, 
  width,
  height,
  title, 
  backgroundColor, 
  isLoading,
  disabled,
  ...rest} 
: Props){
  return (
    <Container
      marginTop={marginTop}
      disabled={disabled}
      activeOpacity={0.5}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      {...rest}
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