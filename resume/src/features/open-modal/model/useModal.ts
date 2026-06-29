import { useModalStore } from "./modalStore";

export function useModal() {
    const open = useModalStore(state => state.open);
    const content = useModalStore(state => state.content);
    const openModal = useModalStore(state => state.openModal);
    const closeModal = useModalStore(state => state.closeModal);

    return { open, content, openModal, closeModal };
}
