import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '../../domain/entities/User';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    set => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    {
      name: 'user-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
