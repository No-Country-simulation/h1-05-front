'use client'
import { Paciente, TipoSangre } from '@/interfaces/user.interface'
import { patientsStore } from '@/store/patients-store'
import { userStore } from '@/store/user-store'
import { Button, Select, SelectItem } from '@nextui-org/react'
import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

type Estado = 'Pre-trasplante' | 'Trasplantado' | 'Donante'

interface DatosPaciente {
    factorSanguineo: TipoSangre
    estadoDelPaciente: Estado
    organoEnfermo: string
}
const sangre: TipoSangre[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const estado = ['Pre-trasplante', 'Trasplantado', 'Donante']
const organos = ['Riñón', 'Corazón', 'Hígado', 'Páncreas', 'Pulmón', 'Huesos', 'Córnea', 'Médula']

export default function EditPatient() {
    const { patient, getPatient } = patientsStore()
    if (!patient) return null

    const [form, setForm] = useState<DatosPaciente>({
        factorSanguineo: patient.factorSanguineo,
        estadoDelPaciente: patient.estadoDelPaciente,
        organoEnfermo: patient.organoEnfermo ? patient.organoEnfermo : '',
    })
    const [loading, setLoading] = useState(false)
    const { token } = userStore()
    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const url = process.env.NEXT_PUBLIC_URL_BACK
            const res = await fetch(`${url}/patients/${patient.id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ form }),
            })
            if (res.ok) {
                const data = await res.json()
                console.log({ enviado: form, respuestaBack: data })
                if (token) getPatient(token, patient.id.toString())
                toast.success('Perfil actualizado correctamente')
            } else {
                toast.error('No se pudo actualizar el perfil :C')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form className='space-y-3 max-w-sm' onSubmit={handleSubmitForm}>
            <Select
                color='secondary'
                label='Estado actual del paciente'
                defaultSelectedKeys={[patient.estadoDelPaciente]}
                onChange={(e) => setForm({ ...form, estadoDelPaciente: e.target.value as Estado })}
            >
                {estado.map((est) => (
                    <SelectItem key={est}>{est}</SelectItem>
                ))}
            </Select>
            <Select
                color='secondary'
                label='Factor sanguineo'
                defaultSelectedKeys={[patient.factorSanguineo]}
                onChange={(e) => setForm({ ...form, factorSanguineo: e.target.value as TipoSangre })}
            >
                {sangre.map((tipo) => (
                    <SelectItem key={tipo}>{tipo}</SelectItem>
                ))}
            </Select>
            <Select
                color='secondary'
                label={`Órgano que necesita ${patient.firstName}`}
                defaultSelectedKeys={[patient.organoEnfermo]}
                onChange={(e) => setForm({ ...form, organoEnfermo: e.target.value })}
            >
                {organos.map((organo) => (
                    <SelectItem key={organo}>{organo}</SelectItem>
                ))}
            </Select>
            <Button color='warning' type='submit' isDisabled={loading} isLoading={loading}>
                Actualizar perfil del paciente
            </Button>
        </form>
    )
}
