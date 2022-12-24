import styled from 'styled-components/native';

export const Container = styled.View`
  width: 182px;
  height: 230px;
  margin-left: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 15px;
  margin-bottom: 20px;

`;

export const Banner = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Details = styled.View`
  flex: 1;
  width: 100%;
  padding: 5px 10px;
`;

export const Price = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ButtonAddCarProduct = styled.TouchableOpacity`
  height: 22px;
  width: 24px;

  margin-right: 5px;

  justify-content: center;
  align-items: center;
  
  
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

