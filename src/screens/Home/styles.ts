import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f5f6;
  padding-top: 50px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  justify-content: space-between;

  flex-direction: row;

  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 20px;

  font-weight: 600;

`;

export const ButtonCloseRequest = styled.TouchableOpacity``;

export const IndicatorQuantity = styled.View`
  padding: 5px 10px;
  border-radius: 50px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

export const TitleQuantity = styled.Text``;

export const Main = styled.View``;