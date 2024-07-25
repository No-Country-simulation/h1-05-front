'use client'

import { Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import { IoIosArrowBack } from 'react-icons/io'
import { horas, dias } from '@/constants/frecuencia-medicacion'

// import CerrarSesion from '@/components/cerrar-sesion'
export default function Frecuencia({ setStep }: { setStep: Function }) {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none hover:cursor-pointer' onClick={() => setStep(2)} />
                <h1 className='font-bold  flex-auto text-center'>Frecuencia</h1>
            </div>
            <RadioGroup label='Frecuencia con la que el paciente va a tomar la medicación' color='secondary'>
                <Radio value='buenos-aires'>Una vez al día</Radio>
                <Radio value='sydney'>Dos veces al día</Radio>
                <Radio value='san-francisco'>Tres veces al día</Radio>
                <Radio value='london'>Más opciones</Radio>
            </RadioGroup>
            <p>
                La frecuencia de la medicación será cada <strong>8h</strong>
            </p>
            <div>
                <strong>Hora</strong>
                <Select label='Se le recordara a partir de las:' className='max-w-xm' color='secondary'>
                    {horas.map((hora, index) => (
                        <SelectItem key={index}>{hora.hora}</SelectItem>
                    ))}
                </Select>
            </div>
            <div>
                <strong>Días de toma</strong>
                <Select label='Debe tomar por:' className='max-w-xm' color='secondary'>
                    {dias.map((dia, index) => (
                        <SelectItem key={index}>{dia.dia}</SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    )
}
