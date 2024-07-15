'use client'

import { Image } from '@nextui-org/react'
import { FaDroplet } from 'react-icons/fa6'
import { RiMapPin2Fill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'

export default function PacienteCard() {
    return (
        <div className='flex flex-col bg-slate-50 px-3 py-2 rounded-lg shadow-md'>
            <div className='flex flex-row items-center justify-start gap-3 border-b-1 border-purple-600 py-2'>
                <Image
                    src='/img/samples/doctor.png'
                    alt='Imagen del perfil paciente'
                    className='object-cover rounded-md max-w-20'
                />
                <div className='font-bold'>
                    <p className='text-2xl'>Jorge Perez</p>
                    <p className='italic'>Patologías: Enfermedad respiratoria</p>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between py-1'>
                <p>DNI: 351213513</p>
                <p>Edad: 32 años</p>
            </div>
            <div className='flex flex-row flex-wrap gap-1'>
                <div className='flex flex-row gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                    <FaDroplet />
                    <p>AB+</p>
                </div>
                <div className='flex flex-row gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                    <RiMapPin2Fill />
                    <p>Mar del Plata, Buenos Aires</p>
                </div>
                <div className='flex flex-row gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                    <GrMail />
                    <p>jorgeperez@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
