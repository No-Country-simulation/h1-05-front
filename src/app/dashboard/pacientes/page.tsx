import CreatePaciente from '@/components/doctor/create-paciente'
import PacienteCard from '@/components/doctor/paciente-card'
import { pacientes } from '@/constants/demo-paciente'
import { Input } from '@nextui-org/react'
import { TfiSearch } from 'react-icons/tfi'

export default function PacientesPage() {
    return (
        <div className='flex flex-col px-4 gap-4 pb-32'>
            <CreatePaciente />
            <p className='text-xl font-bold py-3 border-b-2'>Listado de pacientes</p>
            <Input
                color='secondary'
                label='Buscar paciente'
                placeholder='Ej: Jorge Perez'
                endContent={
                    <button className='pointer-events-none'>
                        <TfiSearch className='text-xl' />
                    </button>
                }
            />
            {pacientes.map((p) => (
                <PacienteCard key={p.id} paciente={p} />
            ))}
        </div>
    )
}
