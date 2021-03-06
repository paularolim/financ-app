import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${Dimensions.get('screen').width - 60}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default}px;
  padding: 20px;
`;

export const GraphicWrapper = styled.View`
  margin: 15px 0px 45px 0px;
`;
