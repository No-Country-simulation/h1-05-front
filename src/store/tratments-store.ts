import { Tratamiento } from '@/interfaces/entidades.interface'
import { create } from 'zustand'

interface TratementsStore {
    treatments: Tratamiento[]
    isLoading: boolean
    getTreatments: (token: string, patientId: number) => void
}

export const treatmentStore = create<TratementsStore>((set) => ({
    treatments: [],
    isLoading: false,
    getTreatments: async (token, patientId) => {
        try {
            set({ isLoading: true })
            const url = process.env.NEXT_PUBLIC_URL_BACK
            const res = await fetch(`${url}/treatments?patientId=${patientId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
            })
            if (res.ok) {
                const treatments: Tratamiento[] = await res.json()
                set({ treatments })
            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))
