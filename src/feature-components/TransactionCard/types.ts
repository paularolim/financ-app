import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

import { CurrencyTypes } from '../../global/types/CurrencyTypes';

export interface TransactionCardProps {
  id: string;
  icon: keyof typeof Icon;
  title: string;
  description: string;
  value: number;
  currency: CurrencyTypes;
  type: 'income' | 'outcome';
}
