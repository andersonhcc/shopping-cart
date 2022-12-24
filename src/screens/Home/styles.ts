import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
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

export const Title = styled.Text`
  font-family: ${({ theme}) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.main};
  font-size: 32px;
  font-weight: 600;

`;

export const ButtonCloseRequest = styled.TouchableOpacity``;

export const IndicatorQuantity = styled.View`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 20px;
  left: 20px;
  bottom: 0;
  right: 0;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.carQuantity};
  justify-content: center;
  align-items: center;
`;

export const TitleQuantity = styled.Text`
  font-family: ${({ theme}) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};

`;

export const Main = styled.View`
  padding-top: 10px;
`;


