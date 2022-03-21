import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

import { theme } from '../../global/theme';
import { ButtonProps, ButtonType } from './types';

const buttonBg = (type: ButtonType) => {
  const types: Record<ButtonType, string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    tertiary: theme.colors.white,
  };

  return types[type] || null;
};

export const Container = styled.TouchableOpacity.attrs(
  () =>
    ({
      activeOpacity: 0.7,
    } as TouchableOpacityProps),
)<Omit<ButtonProps, 'text'>>`
  background-color: ${({ type }) =>
    type ? buttonBg(type) : theme.colors.shape};
  width: ${({ shape }) => (shape === 'round' ? '80px' : '100%')};
  height: ${({ shape }) => (shape === 'round' ? '80px' : 'auto')};
  justify-content: center;
  align-items: center;
  padding: ${({ shape }) => (shape === 'round' ? '0px' : '19px')};
  border-radius: ${({ shape }) => (shape === 'round' ? 200 : 8)}px;
`;

export const Text = styled.Text<Omit<ButtonProps, 'text'>>`
  color: ${theme.colors.white};
  font-size: ${({ shape }) =>
    shape === 'round' ? theme.fontSize.small : theme.fontSize.medium}px;
  font-weight: bold;
  text-transform: ${({ shape }) => (shape === 'round' ? 'uppercase' : 'none')};
`;
