import { Paciente } from '@/interfaces/user.interface'
import { create } from 'zustand'

interface PatientsStore {
    patient: Paciente | null
    patients: Paciente[]
    isLoading: boolean
    getPatients: (token: string) => void
    getPatient: (token: string, id: string) => void
    nullPatient: () => void
}

interface ResponseAPI {
    page: number
    size: number
    total: number
    pages: number
    items: Paciente[]
}
const url = process.env.NEXT_PUBLIC_URL_BACK

export const patientsStore = create<PatientsStore>((set, get) => ({
    patient: null,
    patients: [],
    nullPatient: () => set({ patient: null }),
    getPatient: async (token, id) => {
        const res = await fetch(`${url}/patients/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-cache',
        })
        if (res.ok) {
            const patient: Paciente = await res.json()
            set({ patient })
        }
    },
    getPatients: async (token, doctorId: number = 0) => {
        try {
            set({ isLoading: true })
            const { patients } = get()
            if (patients.length === 0) {
                const res = await fetch(`${url}/patients?page=1&size=100&doctorId=${doctorId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    cache: 'no-cache',
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
