import { TouchableOpacityProps } from 'react-native';

export interface TransactionTypeProps extends TouchableOpacityProps {
  active: boolean;
  text: string;
  type: 'income' | 'outcome';
}
