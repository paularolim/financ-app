import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Container, Menu, MenuItem } from './styles';
import { FabButtonProps } from './types';

// TODO: improve props
/**
 * FabButton
 *
 * @example
 * <FabButton />
 */
export const FabButton = ({
  onPressTransaction,
  onPressWallet,
}: FabButtonProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const rotateButton = useRef(new Animated.Value(0)).current;
  const visibleList = useRef(new Animated.Value(0)).current;

  const handleClickButton = () => {
    if (!visible) {
      setVisible(true);

      Animated.delay(200);
      Animated.timing(rotateButton, {
        duration: 500,
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.timing(visibleList, {
        duration: 500,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(rotateButton, {
        duration: 500,
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(visibleList, {
        duration: 500,
        toValue: 0,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    }
  };

  return (
    <Container>
      <Animated.View
        style={{
          opacity: visibleList.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        {visible && (
          <Menu>
            <MenuItem onPress={onPressTransaction}>
              <Icon
                name="cash-outline"
                color="white"
                size="small"
                marginRight={10}
              />
              <Text color="white">Transaction</Text>
            </MenuItem>

            <MenuItem onPress={onPressWallet}>
              <Icon
                name="wallet-outline"
                color="white"
                size="small"
                marginRight={10}
              />
              <Text color="white">Wallets</Text>
            </MenuItem>
          </Menu>
        )}
      </Animated.View>

      <Animated.View
        style={{
          transform: [
            {
              rotate: rotateButton.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '45deg'],
              }),
            },
          ],
        }}
      >
        <Button
          icon="add"
          shape="round"
          type="secondary"
          onPress={handleClickButton}
        />
      </Animated.View>
    </Container>
  );
};
