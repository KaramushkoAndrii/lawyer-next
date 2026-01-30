import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  // modalContent: {
  //   title: "",
  //   body: null,
  //   footer: null,
  // },

  // openModal: (title, bodyComponent, footerComponent) =>
  //   set({
  //     isOpen: true,
  //     modalContent: { title, body: bodyComponent, footer: footerComponent },
  //   }),

  openModal: () => set({ isOpen: true }),

  closeModal: () => set({ isOpen: false }),

  onOpenChange: (isOpen) => set({ isOpen }),
}));
