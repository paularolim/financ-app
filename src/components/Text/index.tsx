import React from 'react';

import { StyledText } from './styles';
import { TextProps } from './types';

/**
 * Text
 *
 * @example
 * <Text fontSize="xsmall">Example</Text>
 */
export const Text = ({
  children,
  color = 'text',
  fontSize = 'medium',
  textCase = 'none',
  bold = false,
  letterSpacing = 'normal',
}: TextProps): JSX.Element => (
  <StyledText
    color={color}
    fontSize={fontSize}
    textCase={textCase}
    bold={bold}
    letterSpacing={letterSpacing}
  >
    {children}
  </StyledText>
);
