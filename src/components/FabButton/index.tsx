import React, { useState } from 'react';

import { Button, Icon, Text } from '..';

import { Container, Menu, MenuItem } from './styles';

/**
 * FabButton
 *
 * @example
 * <FabButton />
 */
export const FabButton = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      {visible && (
        <Menu>
          {/* TODO: link to transaction form */}
          <MenuItem>
            <Icon
              name="cash-outline"
              color="text"
              size="small"
              marginRight={10}
            />
            <Text>Transaction</Text>
          </MenuItem>

          {/* TODO: link to wallet form */}
          <MenuItem>
            <Icon
              name="wallet-outline"
              color="text"
              size="small"
              marginRight={10}
            />
            <Text>Wallets</Text>
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
