// manage the dir store

import { create } from 'zustand';

export interface IState {
  name: string;
  setName: (newName: string) => void;
}

const useSelectedDirStore = create<IState>(set => ({
  name: '',
  setName: (newName: string) => {
    set({ name: newName });
  },
}));

export default useSelectedDirStore;
