import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  shape?: 'square' | 'round';
  icon?: keyof typeof Icon;
}
