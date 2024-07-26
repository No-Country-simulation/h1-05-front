import { Evento } from '@/interfaces/entidades.interface'
import { create } from 'zustand'

interface EventsStore {
    events: Evento[]
    getEvents: (token: string) => void
    isLoading: boolean
}

export const eventsUserStore = create<EventsStore>((set) => ({
    events: [],
    getEvents: async (token) => {
        set({ isLoading: true })
        try {
            const url = process.env.NEXT_PUBLIC_URL_BACK
            const res = await fetch(`${url}/events`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if (res.ok) {
                const data: Evento[] = await res.json()
                set({ events: data })
            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoading: false })
        }
    },
    isLoading: false,
}))
