
import { Movie } from 'typings';
import {create} from 'zustand'

export interface ModalStoreInterface {
    movie?: Movie | null;
    isOpen: boolean;
    openModal: (movie: Movie | undefined | null) => void;
    closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
    movie: undefined,
    isOpen: false,
    openModal: (movie: Movie | undefined | null) => set({
        isOpen: true, movie
    }),
        closeModal: () => set({
            isOpen: false, movie: undefined
    }),
}));

export default useInfoModalStore;