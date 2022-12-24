import styled from 'styled-components/native';


export const Container = styled.View`
  width: 300px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 15px;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const AmountProduct = styled.Text`
  margin-top: 15px;
  font-size: 17px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text};

`;



export const Price = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.check};
  font-family: ${({ theme }) => theme.fonts.bold};

`;


export const Buttons = styled.View`
  flex-direction: row;
  padding: 15px 0;
  justify-content: flex-end;
  
`;


export const TitleButton = styled.Text`
  font-size: 18px;
  font-weight: 400;

  color: #fff;
`;


export const ButtonAdd = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-left: 5px;


`;


export const ButtonRemove = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const PriceAll = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #DC1637;
`;

export const ImageItem = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const WrapperData = styled.View`
flex:1

`;