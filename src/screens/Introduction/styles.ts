import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 41px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.appTitle}px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: -${({ theme }) => theme.fontSize.medium}px;
  margin-bottom: 90px;
`;
