import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../../global/theme';
import { Container, Text } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  text,
  icon,
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
    {icon && <Icon name={icon} size={30} color={theme.colors.secondary} />}
  </Container>
);
