import create from 'zustand';

interface DashboardState {
  wallet: string | null;
  setWallet: (id: string) => void;

  hideValues: boolean;
  setHideValues: () => void;

  filterFirstDate: string | null;
  setFilterFirstDate: (date: string) => void;
  filterLastDate: string | null;
  setFilterLastDate: (date: string) => void;
}

export const useDashboardState = create<DashboardState>((set, get) => ({
  wallet: 'total',
  setWallet: (id: string) => set({ wallet: id }),

  hideValues: false,
  setHideValues: () => set({ hideValues: !get().hideValues }),

  filterFirstDate: null,
  setFilterFirstDate: (date: string) => set({ filterFirstDate: date }),
  filterLastDate: null,
  setFilterLastDate: (date: string) => set({ filterLastDate: date }),
}));
