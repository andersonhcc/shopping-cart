import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;

`;

export const Title = styled.Text`
  font-size: 17px;
`;

export const Details = styled.View`
  padding: 5px 10px;
`;

export const Price = styled.Text`
  color: #03b252;
`;

export const ButtonAddCarProduct = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  padding: 5px 10px;
  
  margin-right: 15px;
  border-radius: 50px;
  background-color: #aeaeb3;


`;