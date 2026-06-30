"use client";

import { create } from "zustand";

interface ModalState {
    open: boolean;
    content: React.ReactNode | null;
    title: string;

    openModal: (content: React.ReactNode, title: string) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
    open: false,
    content: null,
    title: "",

    openModal: (content, title) => set({ open: true, title: title, content }),
    closeModal: () => set({ open: false, content: null }),
}));
