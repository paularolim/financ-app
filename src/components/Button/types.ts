import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

import { theme } from '../../global/theme';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  type?: ButtonType;
  shape?: 'square' | 'round';
  icon?: keyof typeof Icon;
  iconColor?: keyof typeof theme.colors;
  loading?: boolean;
}
