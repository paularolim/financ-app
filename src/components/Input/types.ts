import { Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  placeholder: string;
  type?: 'default' | 'email' | 'password';
  error?: string;
  control: Control;
  name: string;
}
