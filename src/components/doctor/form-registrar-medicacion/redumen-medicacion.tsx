'use client'
import { Divider, Radio, RadioGroup, Switch } from '@nextui-org/react'
import { IoIosArrowBack } from 'react-icons/io'

// import CerrarSesion from '@/components/cerrar-sesion'
export default function Dosis({ setStep }: { setStep: Function }) {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none hover:cursor-pointer' onClick={() => setStep(4)} />
                <h1 className='font-bold  flex-auto text-center'>Medicación</h1>
            </div>
            <div>
                Vitamina B2
                <Divider className='my-4 bg-secondary' />
                <p>
                    <strong>Notas: </strong>Debe tomar junto con las comidas.
                </p>
                <p>
                    <strong>Frecuencia y dosis: </strong> Tres veces al día.{' '}
                </p>
                <p>
                    Se le recoradará a partir de las <strong>9:00</strong>{' '}
                </p>
                <p>
                    Debe tomar por 3 días <strong>1 dosis</strong>{' '}
                </p>
            </div>
        </div>
    )
}
