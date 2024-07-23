'use client'
import { Radio, RadioGroup, Switch } from '@nextui-org/react'
import { IoIosArrowBack } from 'react-icons/io'

// import CerrarSesion from '@/components/cerrar-sesion'
export default function Dosis({ setStep }: { setStep: Function }) {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none hover:cursor-pointer' onClick={() => setStep(3)} />
                <h1 className='font-bold  flex-auto text-center'>Dosis</h1>
            </div>
            <RadioGroup
                label='La frecuencia de la medicación sera cada 8 horas. ¿Cuantos comprimidos debe tomar?'
                color='secondary'
            >
                <Radio value='buenos-aires'>1 dosis</Radio>
                <Radio value='sydney'>2 dosis</Radio>
                <Radio value='san-francisco'>3 dosis</Radio>
                <Radio value='london'>4 dosis</Radio>
            </RadioGroup>
            <Switch defaultSelected aria-label='Automatic updates' color='secondary'>
                ¿Quieres recibir recordatorios para controlar tu stock de medicamento?
            </Switch>
        </div>
    )
}
