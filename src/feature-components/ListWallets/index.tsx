import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { useDashboardState } from '../../core/application/states/dashboard';
import { Wallet } from '../../core/domain/entities/Wallet';
import { theme } from '../../global/theme';
import { WalletCard } from '../WalletCard';
import { CardCarouselProps } from './types';

export const ListWallets = ({ data }: CardCarouselProps<Wallet[]>) => {
  const [index, setIndex] = React.useState(0);

  const [hideValues, setWallet] = useDashboardState(state => [
    state.hideValues,
    state.setWallet,
  ]);

  const changeActiveWallet = (_index: number) => {
    setIndex(_index);
    const id = data[_index].id;
    setWallet(id);
  };

  return (
    <>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        data={data}
        renderItem={({ item }) => (
          <WalletCard
            title={item.title}
            amount={item.balance}
            income={item.income}
            outcome={item.outcome}
            currency="BRL"
            hideValues={hideValues}
          />
        )}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={372}
        inactiveSlideShift={0}
        onSnapToItem={changeActiveWallet}
        useScrollView
      />
      <Pagination
        activeDotIndex={index}
        dotsLength={data.length}
        dotStyle={[styles.dotStyle, styles.activeDotStyle]}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
  },
  activeDotStyle: {
    backgroundColor: theme.colors.primary,
  },
  inactiveDotStyle: {
    backgroundColor: theme.colors.shape,
  },
});
