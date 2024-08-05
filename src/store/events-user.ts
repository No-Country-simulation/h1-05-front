import { Evento } from '@/interfaces/entidades.interface'
import { create } from 'zustand'

interface EventsStore {
    events: Evento[]
    isLoading: boolean
    getEvents: (token: string) => void
    cleanEvents: () => void
}

export const eventsUserStore = create<EventsStore>((set, get) => ({
    events: [],
    cleanEvents: () => set({ events: [] }),
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
                    cache: 'no-cache',
                })
                if (res.ok) {
                    const data: Evento[] = await res.json()
                    const events = data.sort((a, b) => {
                        return new Date(a.startDatetime).getTime() - new Date(b.startDatetime).getTime()
                    })
                    set({ events })
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
