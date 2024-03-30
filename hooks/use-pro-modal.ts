import { create } from 'zustand';

interface useProModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
//console.log("isOpen");

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
