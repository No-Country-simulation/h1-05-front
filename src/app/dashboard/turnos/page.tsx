'use client'
import { Button, Chip, Divider, Image, Tooltip } from '@nextui-org/react'
import { FaCirclePlus } from 'react-icons/fa6'
import CardCitaMedica from '@/components/paciente/card-cita-medica'
import { useRouter } from 'next/navigation'

export default function Turnos() {
    const route = useRouter()
    return (
        <div className='p-4 min-h-screen max-w-md mx-auto pb-[90px] space-y-4'>
            <h1>Siguientes citas médicas</h1>

            <Divider className='my-4 bg-secondary' />
            <p className='text-secondary'>
                Lunes <strong>9</strong>
            </p>
            <CardCitaMedica />
            <CardCitaMedica />
            <Tooltip
                content='Crear cita médica'
                showArrow
                color='secondary'
                placement='top-end'
                className='pointer-events-none'
            >
                <div
                    className='fixed flex flex-row justify-center items-center bottom-24 right-2 z-20 shadow-lg hover:scale-110 transition-all bg-purple-800 w-12 h-12 rounded-md hover:cursor-pointer'
                    onClick={() => route.push('/dashboard/turnos/agregar-turno')}
                >
                    <FaCirclePlus className='text-2xl text-white' />
                </div>
            </Tooltip>
        </div>
    )
}
