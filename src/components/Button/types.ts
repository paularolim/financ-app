import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  type?: 'primary' | 'secondary';
  shape?: 'square' | 'round';
}
