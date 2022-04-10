import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import firestore from '@react-native-firebase/firestore';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { useUserStore } from '../../core/application/states/user';
import { schema } from './schema';
import { Container } from './styles';
import { FormData, WalletFormProps } from './types';

export const WalletForm = ({ onClose }: WalletFormProps): JSX.Element => {
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

  const handleRegister = ({ title }: FormData): void => {
    setRegisterLoading(true);

    const wallet = {
      title,
      balance: 0,
      incomes: 0,
      outcomes: 0,
      user: user?.id,
    };

    firestore()
      .collection('wallets')
      .add(wallet)
      .then(() => {
        reset();
      })
      // TODO: error feedback
      .catch(error => console.log(error))
      .finally(() => {
        setRegisterLoading(false);
      });
  };

  return (
    <Container>
      <Text fontSize="medium" bold>
        Register Wallet
      </Text>

      <Text>Title</Text>
      <Input
        placeholder="Title"
        error={errors.title && errors.title.message}
        control={control}
        name="title"
      />

      <Button
        text="Register"
        onPress={handleSubmit(handleRegister)}
        loading={registerLoading}
      />
      <Button text="Close" type="secondary" onPress={onClose} />
    </Container>
  );
};
