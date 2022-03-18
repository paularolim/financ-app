import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

type TransactionTypes = { type: 'income' | 'outcome' };

export const Container = styled.TouchableOpacity.attrs(
  () => ({ activeOpacity: 0.7 } as TouchableOpacityProps),
)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
`;

export const IconWrapper = styled.View<TransactionTypes>`
  background-color: ${({ type, theme }) =>
    type === 'income' ? theme.colors.success : theme.colors.danger};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  padding: 15px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
