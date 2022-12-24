import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  marginTop?: number;
  backgroundColor?: string;
  width?: number;
  height?: number;
}

export const Container = styled.TouchableOpacity<Props>`
  ${({marginTop}) => marginTop ? css`margin-top: ${marginTop}px;` : ''};
  
  ${({backgroundColor, theme}) => backgroundColor ? css`background-color: ${backgroundColor};` : css`${theme.colors.text};`};
  
  ${({ width}) => width ? css`width: ${width}px` : css`width: 300px`};

  ${({ height }) => height ? css`height: ${height}px` : css`height: 50px`};

/* 
  width: ${RFValue(300)}px;
  height: ${RFValue(50)}px;  */
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  border-radius: 7px;
  align-items: center;
  justify-content: center;

`;

export const TextButtonAcess = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.medium};

`;

export const Indicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#ffff'
})`
`;