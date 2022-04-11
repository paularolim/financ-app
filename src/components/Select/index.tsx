import React from 'react';

import { Picker } from '@react-native-picker/picker';

import { Container, StyledPicker } from './styles';
import { SelectProps } from './types';

export const Select = ({ items, selectedItem, onChangeItem }: SelectProps) => (
  <Container>
    <StyledPicker
      selectedValue={selectedItem}
      onValueChange={(value: string) => onChangeItem(value)}
    >
      {items.map(item => (
        <Picker.Item label={item.title} value={item.id} key={item.id} />
      ))}
    </StyledPicker>
  </Container>
);
