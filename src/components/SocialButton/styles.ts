import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 18px 0px;
  width: 49%;
  border-radius: ${({ theme }) => theme.radius.small}px;
`;
