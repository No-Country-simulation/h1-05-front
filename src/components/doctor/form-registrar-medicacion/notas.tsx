'use client'
import { Textarea } from '@nextui-org/react'
import { IoIosArrowBack } from 'react-icons/io'

// import CerrarSesion from '@/components/cerrar-sesion'
export default function Notas({ setStep }: { setStep: Function }) {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none hover:cursor-pointer' onClick={() => setStep(1)} />
                <h1 className='font-bold  flex-auto text-center'>Notas</h1>
            </div>
            <p>Ejemplo: ¿Para qué el paciente realiza este tratamiento? Precauciones a tener en cuenta.</p>
            <Textarea label='Notas' placeholder='Introdusca el texto' className='max-w-xm' color='secondary' />
        </div>
    )
}
