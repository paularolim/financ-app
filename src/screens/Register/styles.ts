import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 90px 40px;
  justify-content: space-between;
`;

export const Footer = styled.View`
  background-color: aliceblue;
`;

export const LoginAction = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Arrow = styled(Icon).attrs(
  ({ theme }) =>
    ({
      color: theme.colors.secondary,
      name: 'arrow-forward-sharp',
      size: 20,
    } as IconProps),
)`
  margin-left: 20px;
`;
