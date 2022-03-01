import { Control } from 'react-hook-form';

export interface InputProps {
  placeholder: string;
  type?: 'default' | 'email' | 'password';
  error?: string;
  control: Control;
  name: string;
}
