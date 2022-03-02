import { Dimensions } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: ${Dimensions.get('window').height}px;
  padding: 90px 40px 40px 40px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Scroll = styled.ScrollView``;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
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
