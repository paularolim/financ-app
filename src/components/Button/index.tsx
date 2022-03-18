import React from 'react';

import { Icon } from '..';

import { theme } from '../../global/theme';
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
  onPress,
}: ButtonProps): JSX.Element => (
  <Container type={type} shape={shape} onPress={onPress}>
    {text && (
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
