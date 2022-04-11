import { Picker, PickerProps } from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 6px 0px;
`;

export const StyledPicker = styled(Picker).attrs(
  ({ theme }) =>
    ({
      dropdownIconColor: theme.colors.secondary,
      itemStyle: {
        backgroundColor: theme.colors.shape,
      },
    } as PickerProps),
)`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.small}px;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 18px 0px;
`;
