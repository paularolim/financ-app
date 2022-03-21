import React from 'react';
import { ActivityIndicator } from 'react-native';

import { theme } from '../../global/theme';
import { Icon } from '../Icon';
import { Container, Text } from './styles';
import { ButtonProps } from './types';

/**
 * Button
 *
 * @example
 * <Button text="Example" type="tertiary" />
 */
export const Button = ({
  text,
  icon,
  iconColor = 'white',
  type = 'primary',
  shape = 'square',
  loading = false,
  ...rest
}: ButtonProps): JSX.Element => (
  <Container type={type} shape={shape} {...rest}>
    {loading && text && <ActivityIndicator color={theme.colors.white} />}
    {!loading && text && (
      <Text type={type} shape={shape}>
        {text}
      </Text>
    )}
    {icon && (
      <Icon
        name={icon}
        size="default"
        color={theme.colors[iconColor] as typeof iconColor}
      />
    )}
  </Container>
);
