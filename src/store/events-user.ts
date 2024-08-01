import { Evento } from '@/interfaces/entidades.interface'
import { create } from 'zustand'

interface EventsStore {
    events: Evento[]
    getEvents: (token: string) => void
    isLoading: boolean
}

export const eventsUserStore = create<EventsStore>((set, get) => ({
    events: [],
    getEvents: async (token) => {
        try {
            set({ isLoading: true })
            const { events } = get()
            if (events.length === 0) {
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
            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoading: false })
        }
    },
    isLoading: false,
}))
