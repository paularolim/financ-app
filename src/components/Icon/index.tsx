import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

import { theme } from '../../global/theme';
import { IconProps } from './types';

/**
 * Icon
 * @example
 * <Icon
    name={icon}
    size="default"
    color="white"
  />
 */
export const Icon = ({
  name,
  color = 'white',
  size = 'default',
  margin = 0,
  marginRight = 0,
  marginLeft = 0,
  marginHorizontal = 0,
  marginVertical = 0,
  onPress,
}: IconProps): JSX.Element => {
  // TODO: refactor styles and touchable
  const styles = StyleSheet.create({
    icon: {
      margin,
      marginRight,
      marginLeft,
      marginHorizontal,
      marginVertical,
    },
  });

  return (
    <>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <VectorIcon
            name={name}
            size={theme.iconSize[size]}
            color={theme.colors[color]}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <VectorIcon
          name={name}
          size={theme.iconSize[size]}
          color={theme.colors[color]}
          style={styles.icon}
        />
      )}
    </>
  );
};
