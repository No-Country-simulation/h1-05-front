import { create } from 'zustand'

interface UserStore {
    user: null | string //string de momento, despues cambia a objeto con propiedades
    setUser: (user: string) => void
}

export const userStore = create<UserStore>((set, get) => ({
    user: null,
    setUser: (user: string) => set({ user: user }),
}))
