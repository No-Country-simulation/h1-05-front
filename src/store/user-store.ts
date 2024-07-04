import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
    user: null | string //string de momento, despues cambia a objeto con propiedades
    loadingStore: boolean
    setLoadingStore: (value: boolean) => void
    setUser: (user: string) => void
}

export const userStore = create(
    persist<UserStore>(
        (set, get) => ({
            user: null,
            loadingStore: true,
            setLoadingStore: (value) => set({ loadingStore: value }),
            setUser: (user: string) => set({ user: user }),
        }),
        {
            name: 'user-localstorage',
            onRehydrateStorage: () => (state) => state && state.setLoadingStore(false),
        }
    )
)
