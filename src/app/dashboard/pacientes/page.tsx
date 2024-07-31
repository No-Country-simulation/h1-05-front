'use client'
import CreatePaciente from '@/components/doctor/create-paciente'
import LoadingArray from '@/components/doctor/loading-array'
import PacienteCard from '@/components/doctor/paciente-card'
import { patientsStore } from '@/store/patients-store'
import { userStore } from '@/store/user-store'
import { Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { TfiSearch } from 'react-icons/tfi'

export default function PacientesPage() {
    const { token } = userStore()
    const [paciente, setPaciente] = useState('')
    const { getPatients, isLoading, patients } = patientsStore()
    useEffect(() => {
        if (token) getPatients(token)
    }, [token])

    const filterPacientes = patients.filter((p) => {
        if (!paciente) return true
        else {
            const esNombre = p.firstName.toLowerCase().includes(paciente.toLowerCase())
            const esApellido = p.lastName.toLowerCase().includes(paciente.toLowerCase())
            const esDNI = p.nroDocumento.toString().toLowerCase().includes(paciente.toLowerCase())
            return esNombre || esApellido || esDNI
        }
    })

    return (
        <div className='flex flex-col px-4 gap-4 pb-32'>
            <CreatePaciente />
            <p className='text-xl font-bold py-3 border-b-2'>Listado de pacientes</p>
            <Input
                color='secondary'
                label='Buscar paciente'
                placeholder='Ej: Jorge Perez'
                onChange={(e) => setPaciente(e.target.value)}
                endContent={
                    <button className='pointer-events-none'>
                        <TfiSearch className='text-xl' />
                    </button>
                }
            />
            {isLoading ? <LoadingArray /> : filterPacientes.map((p) => <PacienteCard key={p.id} paciente={p} />)}
        </div>
    )
}
