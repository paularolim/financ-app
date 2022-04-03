import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import firestore from '@react-native-firebase/firestore';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { TransactionType } from '../../components/TransactionType';
import { User } from '../../global/types/User';
import { getItem } from '../../services/storage';
import { schema } from './schema';
import { Container, TransactionButtonGroup, TransactionGroup } from './styles';
import { FormData, TransactionFormProps } from './types';

export const TransactionForm = ({
  onClose,
}: TransactionFormProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [transactionType, setTransactionType] = useState<
    'income' | 'outcome' | null
  >(null);
  const [transactionTypeError, setTransactionTypeError] = useState<
    string | null
  >(null);
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = ({ title, description, amount }: FormData): void => {
    if (!transactionType) {
      return setTransactionTypeError('Transaction type is required!');
    }

    setRegisterLoading(true);

    const transaction = {
      title,
      description,
      amount,
      user: user?.id,
      transactionType,
    };

    console.log(transaction);
    firestore()
      .collection('transactions')
      .add(transaction)
      .then(() => {
        reset();
        setTransactionType(null);
      })
      // TODO: error feedback
      .catch(error => console.log(error))
      .finally(() => {
        setRegisterLoading(false);
        setTransactionTypeError(null);
      });
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
      <TransactionGroup>
        <TransactionButtonGroup>
          <TransactionType
            text="Income"
            type="income"
            onPress={() => {
              setTransactionType('income');
            }}
            active={transactionType === 'income'}
          />
          <TransactionType
            text="Outcome"
            type="outcome"
            onPress={() => {
              setTransactionType('outcome');
            }}
            active={transactionType === 'outcome'}
          />
        </TransactionButtonGroup>

        {transactionTypeError && (
          <Text color="primary" fontSize="small">
            {transactionTypeError}
          </Text>
        )}
      </TransactionGroup>

      <Button
        text="Register"
        onPress={handleSubmit(handleRegister)}
        loading={registerLoading}
      />
      <Button text="Close" type="secondary" onPress={onClose} />
    </Container>
  );
};
