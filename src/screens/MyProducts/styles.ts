import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.main};
  font-size: 32px;
  font-weight: 600;

`;



export const PriceAll = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
`;

export const Header = styled.View`
  width: 100%;
  padding: 83px 37px;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

`;

export const ButtonBack = styled.TouchableOpacity``;

export const ButtonDelete = styled.TouchableOpacity``;

export const Main = styled.View``;

export const WrapperPrice = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;

`;

export const LabelDefault = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 30px;

`;

export const WrapperDefault = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperPriceAll = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


