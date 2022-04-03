import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

interface ContainerProps {
  active: boolean;
  type: 'income' | 'outcome';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ active, theme }) => (active ? 'transparent' : theme.colors.shape_dark)};
  border-radius: 5px;
  padding: 16px;
  flex-direction: row;
  width: 49%;
  background-color: ${({ active, type, theme }) => {
    if (active && type === 'income') {
      return theme.colors.success_light;
    } else if (active && type === 'outcome') {
      return theme.colors.danger_light;
    } else {
      return 'transparent';
    }
  }};
`;
