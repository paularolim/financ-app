import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItem(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

export async function getItem(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key);
}
