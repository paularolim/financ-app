import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface SocialButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}
