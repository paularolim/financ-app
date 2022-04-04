import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

// TODO: alias or index file on root for import
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { SocialAuth } from '../../feature-components/SocialAuth';
import { login } from '../../services/auth';
import { schema } from './schema';
import { Arrow, Container, Footer, LoginAction, Scroll } from './styles';
import { FormData } from './types';

export const Login = (): JSX.Element => {
  const [loginLoading, setLoginLoading] = useState(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = ({ email, password }: FormData): void => {
    setLoginLoading(true);
    login(email, password).finally(() => setLoginLoading(false));
  };

  return (
    <Scroll>
      <Container>
        <View>
          <Text fontSize="big" bold>
            Login
          </Text>

          <SocialAuth />

          <Input
            placeholder="Email"
            type="email"
            error={errors.email && errors.email.message}
            control={control}
            name="email"
            autoCapitalize="none"
          />
          <Input
            placeholder="Password"
            type="password"
            error={errors.password && errors.password.message}
            control={control}
            name="password"
            autoCapitalize="none"
          />
        </View>
        {/* TODO: implement forget password */}

        <Button
          text="Login"
          onPress={handleSubmit(handleLogin)}
          loading={loginLoading}
          disabled={loginLoading}
        />

        <Footer>
          <Text fontSize="small">Don’t have an account?</Text>
          <LoginAction onPress={(): void => navigation.navigate('Register')}>
            <Text
              color="secondary"
              fontSize="small"
              textCase="uppercase"
              bold
              letterSpacing="small"
            >
              Register
            </Text>
            <Arrow />
          </LoginAction>
        </Footer>
      </Container>
    </Scroll>
  );
};
