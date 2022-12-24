import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_finish};
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const BoxIcon = styled.View`
  padding-bottom: 10%;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme}) => theme.fonts.bold};

`;

export const SubTitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme}) => theme.fonts.medium};

`;

export const Footer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;

`;
