import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { Container, Error, Icon, InputWrapper, TextInput } from './styles';
import { InputProps } from './types';

/**
 * Input
 *
 * @example
 *
 * <Input
 *    placeholder="Password"
 *    type="password"
 *    error="Something went wrong"
 *    control={control}
 *    name="password"
 * />
 */
export const Input = ({
  placeholder,
  type = 'default',
  error,
  control,
  name,
}: InputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <InputWrapper isFocused={isFocused}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }): JSX.Element => (
            <TextInput
              placeholder={placeholder}
              value={value}
              onFocus={(): void => setIsFocused(true)}
              onBlur={(): void => setIsFocused(false)}
              onChangeText={onChange}
              secureTextEntry={type === 'password' && !showPassword}
            />
          )}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={(): void => setShowPassword(!showPassword)}
            activeOpacity={0.7}
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} />
          </TouchableOpacity>
        )}
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
