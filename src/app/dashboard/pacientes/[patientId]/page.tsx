'use client'
import { useEffect, useState } from 'react'
import { Paciente } from '@/interfaces/user.interface'
import { userStore } from '@/store/user-store'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import SinglePatient from '@/components/paciente/single-patient'

export default function PatientPage({ params }: { params: { patientId: string } }) {
    const [patient, setPatient] = useState<null | Paciente>(null)
    const { token } = userStore()
    const route = useRouter()

    const getPatientData = async (token: string) => {
        const url = process.env.NEXT_PUBLIC_URL_BACK
        const res = await fetch(`${url}/patients/${params.patientId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (res.ok) {
            const dataPatient: Paciente = await res.json()
            setPatient(dataPatient)
        } else {
            toast.error(`No se encontró usuario con ID: ${params.patientId}`, { position: 'top-center' })
            route.push('/dashboard/pacientes')
        }
    }
    useEffect(() => {
        if (token) getPatientData(token)
    }, [token])

    if (!patient) return <>Obteniendo data...</>
    return <SinglePatient patient={patient} />
}
