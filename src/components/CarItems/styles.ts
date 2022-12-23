import styled from 'styled-components/native';


export const Container = styled.View`
  padding: 15px 15px;
  background-color: #fff;
  margin-bottom: 15px;
`;

export const Details = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

export const AmountProduct = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;



export const Price = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #03b252;
`;


export const Buttons = styled.View`
  flex-direction: row;
  padding: 15px 0;
  
`;


export const TitleButton = styled.Text`
  font-size: 18px;
  font-weight: 400;

  color: #fff;
`;


export const ButtonAdd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  background-color: #503E9D;

`;


export const ButtonRemove = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  margin-left: 5px;
  background-color: #503E9D;
`;

export const PriceAll = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #DC1637;
`;