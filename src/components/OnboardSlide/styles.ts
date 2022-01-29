import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width}px;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;
`;

export const Header = styled.View`
  align-self: flex-end;
`;

export const Info = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Inter-Medium';
  font-size: 44px;
  font-weight: 500;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Inter-Regular';
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
