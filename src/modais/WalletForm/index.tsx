import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { useUserStore } from '../../core/application/states/user';
import { FeedbackMessage } from '../../feature-components/FeedbackMessage';
import { createWallet } from './presenter';
import { schema } from './schema';
import { Container } from './styles';
import { FormData, WalletFormProps } from './types';

export const WalletForm = ({ onClose }: WalletFormProps): JSX.Element => {
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState<boolean>(false);
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

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
    setRegisterError(false);
    setRegisterSuccess(false);
    setRegisterLoading(true);

    if (user) {
      createWallet(
        title,
        user,
        () => {
          setRegisterSuccess(true);
          reset();
        },
        () => {
          setRegisterError(true);
        },
      );
    }

    setRegisterLoading(false);
  };

  return (
    <>
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
          disabled={registerLoading}
        />
        <Button text="Close" type="secondary" onPress={onClose} />
      </Container>

      {registerSuccess && (
        <FeedbackMessage message="Wallet added successfully" type="success" />
      )}
      {registerError && (
        <FeedbackMessage message="Could not add wallet" type="error" />
      )}
    </>
  );
};
