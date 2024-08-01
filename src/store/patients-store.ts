import { Paciente } from '@/interfaces/user.interface'
import { create } from 'zustand'

interface PatientsStore {
    patients: Paciente[]
    getPatients: (token: string) => void
    isLoading: boolean
}

interface ResponseAPI {
    page: number
    size: number
    total: number
    pages: number
    items: Paciente[]
}

export const patientsStore = create<PatientsStore>((set, get) => ({
    patients: [],
    getPatients: async (token, doctorId: number = 0) => {
        try {
            set({ isLoading: true })
            const { patients } = get()
            if (patients.length === 0) {
                const url = process.env.NEXT_PUBLIC_URL_BACK
                const res = await fetch(`${url}/patients?page=1&size=100&doctorId=${doctorId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                if (res.ok) {
                    const data: ResponseAPI = await res.json()
                    set({ patients: data.items })
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
