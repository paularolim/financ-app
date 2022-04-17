import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { Text } from '../../components/Text';
import { Container } from './styles';

export const FeedbackMessage = ({
  message,
  type,
}: {
  message: string;
  type: 'success' | 'error';
}) => {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(position, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(position, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: position.interpolate({
              inputRange: [0, 1],
              outputRange: [200, 0],
            }),
          },
        ],
      }}
    >
      <Container type={type}>
        <Text>{message}</Text>
      </Container>
    </Animated.View>
  );
};
