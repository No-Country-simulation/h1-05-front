'use client'

import { Chip, Image } from '@nextui-org/react'
import { FaDroplet } from 'react-icons/fa6'
import { RiMapPin2Fill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'
import { Paciente } from '@/interfaces/user.interface'
import { calculateAge } from '@/utils/calculateAge'
import Link from 'next/link'
export default function PacienteCard({ paciente }: { paciente: Paciente }) {
    if (!paciente) return null
    // const findPatologia = enfermedades.find(({ detalle }) => detalle === paciente.patologia)
    // const findPrepaga = prepagas.find(({ entidad }) => entidad === paciente.prepaga)
    let background: string = 'bg-purple-200'
    if (paciente.estadoDelPaciente === 'Donante') background = 'bg-green-200'
    if (paciente.estadoDelPaciente === 'Trasplantado') background = 'bg-yellow-200'
    return (
        <Link href={`pacientes/${paciente.id}`}>
            <div className='flex flex-col bg-slate-50 px-3 py-2 rounded-lg shadow-md hover:scale-105 sm:hover:scale-[98%] cursor-pointer transition-all'>
                <div className='flex flex-row items-center justify-start gap-3 py-2'>
                    <Image
                        src={paciente.photo ? paciente.photo : '/img/samples/doctor.png'}
                        alt='Imagen del perfil paciente'
                        className='object-cover rounded-md max-w-20'
                    />
                    <div>
                        <p className='font-bold text-2xl'>
                            {paciente.firstName} {paciente.lastName}
                        </p>
                        {/* {findPatologia && <p className='italic'>Patología: {findPatologia.detalle}</p>} */}
                    </div>
                </div>
                <div className={`w-full rounded-lg py-2 ${background} text-default-800 font-extrabold px-3`}>
                    {paciente.estadoDelPaciente}
                </div>
                <div className='flex flex-row items-center justify-between py-1'>
                    <p>DNI: {paciente.nroDocumento}</p>
                    <p>Edad: {calculateAge(paciente.fechaNacimiento)} años</p>
                </div>
                <div className='flex flex-row flex-wrap gap-1 py-2'>
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
                {/* {findPrepaga && (
                <div className='flex flex-row flex-wrap gap-2 my-2'>
                    <Chip color='warning'>{findPrepaga.entidad}</Chip>
                </div>
            )} */}
            </div>
        </Link>
    )
}
