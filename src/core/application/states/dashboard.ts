import create from 'zustand';

interface DashboardState {
  wallet: string | null;
  setWallet: (id: string) => void;
  hideValues: boolean;
  setHideValues: () => void;
}

export const useDashboardState = create<DashboardState>((set, get) => ({
  wallet: 'total',
  setWallet: (id: string) => set({ wallet: id }),
  hideValues: false,
  setHideValues: () => set({ hideValues: !get().hideValues }),
}));
