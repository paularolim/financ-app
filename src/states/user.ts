import create from 'zustand';

interface UserSchema {
  id: string;
  name?: string;
}

interface UserState {
  user: UserSchema | null;
  setUser: (user: UserSchema) => void;
}

export const useUserState = create<UserState>(set => ({
  user: null,
  setUser: user => {
    set({ user });
  },
}));
