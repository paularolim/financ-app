import { TextProps as RNTextProps } from 'react-native';

import { theme } from '../../global/theme';

export interface TextProps extends RNTextProps {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fontSize;
  textCase?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  bold?: boolean;
  letterSpacing?: keyof typeof theme.letterSpacing;
}
