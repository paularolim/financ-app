import { TextInputProps } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 6px 0px;
`;

export const InputWrapper = styled.View<{ isFocused: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 13px;
  border-radius: 8px;
  border: ${({ isFocused, theme }) =>
    isFocused ? `1px solid ${theme.colors.secondary}` : 'none'};
`;

export const TextInput = styled.TextInput.attrs(
  ({ theme }) =>
    ({
      placeholderTextColor: theme.colors.text_light,
    } as TextInputProps),
)`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.small}px;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 18px 0px;
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.text_light,
}))``;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;
