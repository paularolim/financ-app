import React, { useState } from 'react';

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
}: FabButtonProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
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

          {/* TODO: link to wallet form */}
          <MenuItem>
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

      <Button
        icon="add"
        shape="round"
        type="secondary"
        onPress={(): void => setVisible(!visible)}
      />
    </Container>
  );
};
