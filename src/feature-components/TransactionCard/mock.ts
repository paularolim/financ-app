import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

interface TransactionMock {
  id: string;
  icon: typeof Icon;
  title: string;
  description: string;
  value: number;
  currency: 'BRL' | 'USD';
  type: 'income' | 'outcome';
}

export const transactionsMock: TransactionMock[] = [
  {
    id: '01',
    icon: 'add',
    title: 'Salary',
    description: 'Income',
    value: 1000,
    currency: 'BRL',
    type: 'income',
  },
  {
    id: '02',
    icon: 'home',
    title: 'Shopping',
    description: 'Home',
    value: 600,
    currency: 'BRL',
    type: 'outcome',
  },

  {
    id: '03',
    icon: 'add',
    title: 'Salary',
    description: 'Income',
    value: 1000,
    currency: 'BRL',
    type: 'income',
  },
  {
    id: '04',
    icon: 'home',
    title: 'Shopping',
    description: 'Home',
    value: 600,
    currency: 'BRL',
    type: 'outcome',
  },
  {
    id: '05',
    icon: 'add',
    title: 'Salary',
    description: 'Income',
    value: 1000,
    currency: 'BRL',
    type: 'income',
  },
  {
    id: '06',
    icon: 'home',
    title: 'Shopping',
    description: 'Home',
    value: 600,
    currency: 'BRL',
    type: 'outcome',
  },
];
