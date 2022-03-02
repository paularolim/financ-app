import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// TODO: alias or index file on root for import
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Input } from '../../components/Input';
import { OrSeparator } from '../../components/OrSeparator';
import { SocialButton } from '../../components/SocialButton';
import { Text } from '../../components/Text';
import { schema } from './schema';
import {
  Arrow,
  Container,
  Footer,
  LoginAction,
  Scroll,
  SocialContainer,
} from './styles';
import { FormData } from './types';

export const Register = (): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChecked = (): void => {
    setChecked(!checked);
  };

  const handleRegister = ({ name, email, password }: FormData): void => {
    if (!checked) {
      // TODO: error feedback
      console.log('Need to tick the checkbox');
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        firestore()
          .collection('users')
          .add({
            uid: response.user.uid,
            name,
          })
          .then(() => {
            // TODO: link to home
          })
          // TODO: error feedback
          .catch(error => console.log(error));
      })
      // TODO: error feedback
      .catch(error => console.log(error));
  };

  return (
    <Scroll>
      <Container>
        <View>
          <Text fontSize="big" bold>
            Register
          </Text>

          <SocialContainer>
            {/* TODO: social authenticate */}
            <SocialButton>Google</SocialButton>
            <SocialButton>Facebook</SocialButton>
          </SocialContainer>

          <OrSeparator />

          <Input
            placeholder="Name"
            error={errors.name && errors.name.message}
            control={control}
            name="name"
          />
          <Input
            placeholder="Email"
            type="email"
            error={errors.email && errors.email.message}
            control={control}
            name="email"
          />
          <Input
            placeholder="Password"
            type="password"
            error={errors.password && errors.password.message}
            control={control}
            name="password"
          />
          <Checkbox
            value={checked}
            onChangeValue={handleChecked}
            label="I’ve read and agree to the terms of privacy policy"
          />
        </View>

        {/* TODO: loading feedback while try to log in */}
        <Button text="Register" onPress={handleSubmit(handleRegister)} />

        <Footer>
          <Text fontSize="small">Already have an account?</Text>
          {/* TODO: link to login screen */}
          <LoginAction onPress={(): void => {}}>
            <Text
              color="secondary"
              fontSize="small"
              textCase="uppercase"
              bold
              letterSpacing="small"
            >
              Login
            </Text>
            <Arrow />
          </LoginAction>
        </Footer>
      </Container>
    </Scroll>
  );
};
