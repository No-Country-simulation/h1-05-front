'use client'

import { Chip, Image } from '@nextui-org/react'
import { FaDroplet } from 'react-icons/fa6'
import { RiMapPin2Fill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'
import { Paciente } from '@/interfaces/user.interface'
import { enfermedades } from '@/constants/nomenclaturas/enfermedades'
import { calculateAge } from '@/utils/calculateAge'
import { prepagas } from '@/constants/nomenclaturas/prepagas'
export default function PacienteCard({ paciente }: { paciente: Paciente }) {
    if (!paciente) return null
    const findPatologia = enfermedades.find(({ detalle }) => detalle === paciente.patologia)
    const findPrepaga = prepagas.find(({ entidad }) => entidad === paciente.prepaga)

    return (
        <div className='flex flex-col bg-slate-50 px-3 py-2 rounded-lg shadow-md border-2 border-purple-600/20 hover:scale-105 sm:hover:scale-95 transition-all'>
            <div className='flex flex-row items-center justify-start gap-3 border-b-1 border-purple-600 py-2'>
                <Image
                    src='/img/samples/doctor.png'
                    alt='Imagen del perfil paciente'
                    className='object-cover rounded-md max-w-20'
                />
                <div>
                    <p className='font-bold text-2xl'>
                        {paciente.firstName} {paciente.lastname}
                    </p>
                    {findPatologia && <p className='italic'>Patología: {findPatologia.detalle}</p>}
                </div>
            </div>
            <div className='flex flex-row items-center justify-between py-1'>
                <p>DNI: {paciente.nroDocumento}</p>
                <p>Edad: {calculateAge(paciente.fechaNacimiento)} años</p>
            </div>
            <div className='flex flex-row flex-wrap gap-1'>
                <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                    <FaDroplet className='text-sm text-red-700' />
                    <p>{paciente.factorSanguineo}</p>
                </div>
                <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                    <RiMapPin2Fill className='text-sm text-green-700' />
                    {paciente.city !== paciente.province ? (
                        <p>
                            {paciente.city}, {paciente.province}
                        </p>
                    ) : (
                        <p>{paciente.city}</p>
                    )}
                </div>
                <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                    <GrMail className='text-sm text-blue-700' />
                    <p>{paciente.email}</p>
                </div>
            </div>
            {findPrepaga && (
                <div className='flex flex-row flex-wrap gap-2 my-2'>
                    <Chip color='warning'>{findPrepaga.entidad}</Chip>
                </div>
            )}
        </div>
    )
}
