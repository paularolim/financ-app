import React from 'react';

import { OrSeparator } from '../../components/OrSeparator';
import { SocialButton } from '../../components/SocialButton';
import { Container } from './styles';

export const SocialAuth = (): JSX.Element => (
  <>
    <Container>
      {/* TODO: social authenticate */}
      <SocialButton>Google</SocialButton>
      <SocialButton>Facebook</SocialButton>
    </Container>

    <OrSeparator />
  </>
);
