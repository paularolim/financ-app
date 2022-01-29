import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(
  () =>
    ({
      activeOpacity: 0.7,
    } as TouchableOpacityProps),
)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 19px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: bold;
`;
