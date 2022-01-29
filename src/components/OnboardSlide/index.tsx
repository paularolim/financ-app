import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import { Button } from '../Button';
import { Container, Footer, Header, Info, Text, Title } from './styles';
import { OnboardSlideProps } from './types';

export const OnboardSlide = ({
  title,
  text,
  path,
  index,
  onPressNext,
  onSkip,
}: OnboardSlideProps): JSX.Element => (
  <Container>
    <Header>
      <TouchableOpacity onPress={onSkip}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </Header>

    <Info>
      <Image source={path as ImageSourcePropType} width={200} height={200} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Info>

    <Footer>
      <Text>{`${index}/3`}</Text>
      <Button
        text="Next"
        shape="round"
        type="secondary"
        onPress={onPressNext}
      />
    </Footer>
  </Container>
);
