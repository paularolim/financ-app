import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

import { ButtonProps } from './types';

export const Container = styled.TouchableOpacity.attrs(
  () =>
    ({
      activeOpacity: 0.7,
    } as TouchableOpacityProps),
)<Omit<ButtonProps, 'text'>>`
  background-color: ${({ type, theme }) =>
    type === 'primary'
      ? theme.colors.primary
      : type === 'secondary'
      ? theme.colors.secondary
      : theme.colors.white};
  width: ${({ shape }) => (shape === 'round' ? '80px' : '100%')};
  height: ${({ shape }) => (shape === 'round' ? '80px' : 'auto')};
  justify-content: center;
  align-items: center;
  padding: ${({ shape }) => (shape === 'round' ? '0px' : '19px')};
  border-radius: ${({ shape }) => (shape === 'round' ? 200 : 8)}px;
`;

export const Text = styled.Text<Omit<ButtonProps, 'text'>>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ shape, theme }) =>
    shape === 'round' ? theme.fontSize.small : theme.fontSize.medium}px;
  font-weight: bold;
  text-transform: ${({ shape }) => (shape === 'round' ? 'uppercase' : 'none')};
`;
