import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Text } from '../../components/Text';
import { TransactionType } from '../../components/TransactionType';
import { useUserStore } from '../../core/application/states/user';
import { Wallet } from '../../core/domain/entities/Wallet';
import { FeedbackMessage } from '../../feature-components/FeedbackMessage';
import { createTransaction, getAllWalletsFromUser } from './presenter';
import { schema } from './schema';
import { Container, TransactionButtonGroup, TransactionGroup } from './styles';
import { FormData, TransactionFormProps } from './types';

export const TransactionForm = ({
  onClose,
}: TransactionFormProps): JSX.Element => {
  const [transactionType, setTransactionType] = useState<
    'income' | 'outcome' | null
  >(null);
  const [walletOptions, setWalletOptions] = useState<Wallet[]>([]);
  const [walletSelected, setWalletSelected] = useState<string | null>(null);

  const [typeError, setTypeError] = useState<string | null>(null);
  const [walletError, setWalletError] = useState<string | null>(null);

  const [registerError, setRegisterError] = useState<boolean>(false);
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);

  const user = useUserStore().user;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = ({ title, description, amount }: FormData): void => {
    setRegisterError(false);
    setRegisterSuccess(false);

    if (!transactionType) {
      return setTypeError('Transaction type is required!');
    }

    if (!walletSelected) {
      return setWalletError('Wallet is required!');
    }

    setRegisterLoading(true);

    createTransaction(
      walletSelected,
      title,
      description,
      parseFloat(amount),
      transactionType,
      () => {
        setRegisterSuccess(true);
        reset();
      },
      error => {
        setRegisterError(true);
        console.log(error);
      },
    );

    setRegisterLoading(false);
  };

  useEffect(() => {
    if (user) {
      getAllWalletsFromUser(user, setWalletOptions, error => {
        console.log(error);
      });
    }
  }, [user]);

  return (
    <>
      <Container>
        <Text fontSize="medium" bold>
          Register Transaction
        </Text>

        <Text>Wallet</Text>
        {walletOptions ? (
          <Select
            items={walletOptions}
            selectedItem={walletSelected}
            onChangeItem={setWalletSelected}
          />
        ) : (
          <Text>Add a new wallet</Text>
        )}
        {walletError && <Text>{walletError}</Text>}

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

          {typeError && (
            <Text color="primary" fontSize="small">
              {typeError}
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

      {registerSuccess && (
        <FeedbackMessage
          message="Transaction added successfully"
          type="success"
        />
      )}
      {registerError && (
        <FeedbackMessage message="Could not add transaction" type="error" />
      )}
    </>
  );
};
