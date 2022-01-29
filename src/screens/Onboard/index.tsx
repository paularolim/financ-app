import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { OnboardSlide } from '../../components/OnboardSlide';
import { slides } from './mocks';
import { Container } from './styles';

export const Onboard = (): JSX.Element => {
  const [index, setIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const _index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(_index);
      setIndex(roundIndex);
      console.log('roundIndex:', roundIndex);
    },
    [],
  );

  const skip = (): void => {
    // TODO implement skip button - navigate to "welcome"
    console.log('skip <<<<<<<<');
  };

  const scrollToNext = (): void => {
    const newIndex = index + 1;

    if (newIndex !== slides.length) {
      setIndex(newIndex);
    } else {
      // TODO implement navigate to "welcome"
    }
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ index });
  }, [index]);

  return (
    <Container>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item): string => item.key}
        renderItem={({ item }): JSX.Element => (
          <OnboardSlide
            text={item.text}
            title={item.title}
            path={item.image}
            index={item.key}
            onPressNext={scrollToNext}
            onSkip={skip}
          />
        )}
        onMomentumScrollEnd={onMomentumScrollEnd}
        initialScrollIndex={index}
        ref={flatListRef}
      />
    </Container>
  );
};
