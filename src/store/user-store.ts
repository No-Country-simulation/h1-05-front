import { Medico, Paciente } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
    user: null | Medico | Paciente
    token: null | string
    loadingStore: boolean
    setLoadingStore: (value: boolean) => void
    setUser: (user: Medico | Paciente) => void
    setToken: (token: string) => void
    cerrarSesion: () => void
}

export const userStore = create(
    persist<UserStore>(
        (set, get) => ({
            user: null,
            token: null,
            loadingStore: true,
            setLoadingStore: (value) => set({ loadingStore: value }),
            setUser: (user) => set({ user: user }),
            cerrarSesion: () => set({ user: null, token: null }),
            setToken: (token) => set({ token }),
        }),
        {
            name: 'user-localstorage',
            onRehydrateStorage: () => (state) => state && state.setLoadingStore(false),
        }
    )
)
