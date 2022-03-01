import { TouchableOpacityProps } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(
  () =>
    ({
      activeOpacity: 1,
    } as TouchableOpacityProps),
)`
  flex-direction: row;
  align-items: center;
  margin: 6px 0px;
`;

const CheckboxBase = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 7px;
`;

export const CheckboxUnchecked = styled(CheckboxBase)`
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1.5px solid ${({ theme }) => theme.colors.shape_dark};
`;

export const CheckboxChecked = styled(CheckboxBase)`
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
`;

export const CheckIcon = styled(Icon).attrs(
  ({ theme }) =>
    ({
      name: 'checkmark-sharp',
      color: theme.colors.white,
      size: 18,
    } as IconProps),
)``;
