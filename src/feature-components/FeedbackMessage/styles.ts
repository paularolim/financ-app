import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

interface ContainerProps {
  type: 'success' | 'error';
}

export const Container = styled.View<ContainerProps>`
  position: absolute;
  bottom: 0;
  width: ${width - 40}px;
  background-color: ${({ type, theme }) =>
    type === 'success' ? theme.colors.success : theme.colors.danger};
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: ${({ theme }) => theme.radius.small}px;
`;
