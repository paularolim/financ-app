import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

import { theme } from '../../global/theme';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  shape?: 'square' | 'round';
  icon?: keyof typeof Icon;
  iconColor?: keyof typeof theme.colors;
}
