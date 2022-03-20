import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import firestore from '@react-native-firebase/firestore';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { User } from '../../global/types/User';
import { getItem } from '../../services/storage';
import { schema } from './schema';
import { Container } from './styles';
import { FormData, TransactionFormProps } from './types';

export const TransactionForm = ({
  onClose,
}: TransactionFormProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = ({ title, description, amount }: FormData): void => {
    console.log({ title, description, amount, user: user?.id });
    firestore()
      .collection('transactions')
      .add({
        title,
        description,
        amount,
        userId: user?.id,
      })
      .then(() => {
        // TODO: add user id
        // TODO: close modal
      })
      // TODO: error feedback
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await getItem('user');
      setUser(result ? (JSON.parse(result) as User) : null);
    };
    loadUser();
  }, []);

  return (
    <Container>
      <Text fontSize="medium" bold>
        Register Transaction
      </Text>

      <Text>Title</Text>
      <Input
        placeholder="Title"
        error={errors.title && errors.title.message}
        control={control}
        name="title"
      />
      <Text>Description</Text>
      <Input
        placeholder="Description"
        error={errors.description && errors.description.message}
        control={control}
        name="description"
      />
      <Text>Amount</Text>
      <Input
        placeholder="Amount"
        error={errors.amount && errors.amount.message}
        control={control}
        name="amount"
      />

      <Button text="Register" onPress={handleSubmit(handleRegister)} />
      <Button text="Close" type="secondary" onPress={onClose} />
    </Container>
  );
};
