'use client'
import { MedicosDisponibles } from '@/interfaces/medico-disponible.interface'
import { Chip, Image } from '@nextui-org/react'

export default function cardCitaMedica({ medicoDisponible }: { medicoDisponible: MedicosDisponibles }) {
    return (
        <div className='flex gap-4 items-center justify-between bg-[#EBDCF8] p-4 rounded-md'>
            <div className='flex gap-4 items-center'>
                <Image src='/img/samples/doctor.png' alt='imagen del paciente' className='w-[40px] h-[40px]'></Image>
                <div className='text-secondary'>
                    <h3 className='font-bold'>Dr {medicoDisponible.firstName + ' ' + medicoDisponible.lastname}</h3>
                    <p>{medicoDisponible.lugarAtencion}</p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <Chip className='bg-white'>{medicoDisponible.lugarAtencion}</Chip>
            </div>
        </div>
    )
}
