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
  onDone,
  textColor = 'dark',
}: OnboardSlideProps): JSX.Element => (
  <Container>
    {onSkip && (
      <Header>
        <TouchableOpacity onPress={onSkip}>
          <Text color={textColor}>Skip</Text>
        </TouchableOpacity>
      </Header>
    )}

    <Info>
      <Image source={path as ImageSourcePropType} width={200} height={200} />
      <Title color={textColor}>{title}</Title>
      <Text color={textColor}>{text}</Text>
    </Info>

    <Footer>
      {index && <Text color={textColor}>{`${index}/3`}</Text>}
      {onPressNext && (
        <Button
          text="Next"
          shape="round"
          type="secondary"
          onPress={onPressNext}
        />
      )}
    </Footer>
    {onDone && (
      <Button
        icon="arrow-forward-outline"
        iconColor="secondary"
        shape="round"
        type="tertiary"
        onPress={onDone}
      />
    )}
  </Container>
);
