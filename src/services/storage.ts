import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save an item on Async Storage.
 * @param key an key.
 * @param value an value.
 */
export async function setItem(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

/**
 * Get an item from Async Storage.
 * @param key an key.
 * @returns an item as string.
 */
export async function getItem(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key);
}

/**
 * Remove an item from Async Storage.
 * @param key an key.
 */
export async function removeItem(key: string) {
  await AsyncStorage.removeItem(key);
}
