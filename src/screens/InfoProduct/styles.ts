import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background_primary};

`;

export const Header = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 50px;
`;


export const IconBack = styled(AntDesign).attrs({
  name: 'left'
})`
  color: ${({ theme }) => theme.colors.title};
  font-size: 30px;
`;

export const WrapperImage = styled.View`
  flex: 1;
  width: 100%;
  padding: 31px 0;
  
`;


export const ImageFood = styled.Image`
  width: 100%;
  height: 245px;
  border-radius: 15px;
`;

export const Main = styled.View`
  flex:1;
  width: 100%;
`;

export const Details = styled.View`
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_info};
  font-size: 32px;
  margin-bottom: 9px;

`;

export const LabelDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_info};
  font-size: 18px;
  margin-bottom: 9px;

`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-bottom: 9px;
`;

export const Footer = styled.View`
  padding-bottom: 30px;

`;