import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

import { theme } from '../../global/theme';

export interface IconProps {
  name: keyof typeof Icon;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.iconSize;
  margin?: number;
  marginRight?: number;
  marginLeft?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  onPress?: () => void;
}
