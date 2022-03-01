import React from 'react';

import { Text } from '../Text';
import {
  CheckboxChecked,
  CheckboxUnchecked,
  CheckIcon,
  Container,
} from './styles';
import { CheckboxProps } from './types';

/**
 * Checkbox
 *
 * @example
 * <Checkbox
 *    value={false}
 *    onChangeValue={() => {}}
 *    label="Example"
 * />
 */
export const Checkbox = ({
  value,
  onChangeValue,
  label,
}: CheckboxProps): JSX.Element => (
  <Container onPress={onChangeValue}>
    {!value && <CheckboxUnchecked />}
    {value && (
      <CheckboxChecked>
        <CheckIcon />
      </CheckboxChecked>
    )}
    <Text fontSize="xsmall">{label}</Text>
  </Container>
);
