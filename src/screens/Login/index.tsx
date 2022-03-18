import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

// TODO: alias or index file on root for import
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { SocialAuth } from '../../feature-components/SocialAuth';
import { schema } from './schema';
import { Arrow, Container, Footer, LoginAction, Scroll } from './styles';
import { FormData } from './types';

export const Login = (): JSX.Element => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = ({ email, password }: FormData): void => {
    auth()
      .signInWithEmailAndPassword(email, password)
      // TODO: feedback the error
      .catch(error => console.log(error));
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

        {/* TODO: loading feedback while try to log in */}
        <Button text="Login" onPress={handleSubmit(handleLogin)} />

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
