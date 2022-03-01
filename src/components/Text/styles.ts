import styled from 'styled-components/native';

import { theme } from '../../global/theme';

interface StyledTextProps {
  color: keyof typeof theme.colors;
  fontSize: keyof typeof theme.fontSize;
  textCase: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  bold: boolean;
  letterSpacing: keyof typeof theme.letterSpacing;
}

export const StyledText = styled.Text<StyledTextProps>`
  font-family: ${({ bold }) => (bold ? 'Inter-Bold' : 'Inter')};
  color: ${({ color }) => theme.colors[color]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]}px;
  text-transform: ${({ textCase }) => textCase};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  letter-spacing: ${({ letterSpacing }) =>
    theme.letterSpacing[letterSpacing]}px;
`;
