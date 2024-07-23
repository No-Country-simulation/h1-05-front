'use client'

import { Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import { IoIosArrowBack } from 'react-icons/io'

// import CerrarSesion from '@/components/cerrar-sesion'
export default function Frecuencia({ setStep }: { setStep: Function }) {
    const horas = [
        { hora: '00:00 am' },
        { hora: '01:00 am' },
        { hora: '02:00 am' },
        { hora: '03:00 am' },
        { hora: '04:00 am' },
        { hora: '05:00 am' },
        { hora: '06:00 am' },
        { hora: '07:00 am' },
        { hora: '08:00 am' },
        { hora: '09:00 am' },
        { hora: '10:00 am' },
        { hora: '11:00 am' },
        { hora: '12:00 pm' },
        { hora: '01:00 pm' },
        { hora: '02:00 pm' },
        { hora: '03:00 pm' },
        { hora: '04:00 pm' },
        { hora: '05:00 pm' },
        { hora: '06:00 pm' },
        { hora: '07:00 pm' },
        { hora: '08:00 pm' },
        { hora: '09:00 pm' },
        { hora: '10:00 pm' },
        { hora: '11:00 pm' },
    ]
    const dias = [
        { dia: '1 día' },
        { dia: '2 días' },
        { dia: '3 días' },
        { dia: '4 días' },
        { dia: '5 días' },
        { dia: '6 días' },
        { dia: '7 días' },
        { dia: '8 días' },
        { dia: '9 días' },
        { dia: '10 días' },
        { dia: '11 días' },
        { dia: '12 días' },
        { dia: '13 días' },
        { dia: '14 días' },
        { dia: '15 días' },
        { dia: '16 días' },
        { dia: '17 días' },
        { dia: '18 días' },
        { dia: '19 días' },
        { dia: '20 días' },
        { dia: '21 días' },
        { dia: '22 días' },
        { dia: '23 días' },
        { dia: '24 días' },
        { dia: '25 días' },
        { dia: '26 días' },
        { dia: '27 días' },
        { dia: '28 días' },
        { dia: '29 días' },
        { dia: '30 días' },
    ]
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none hover:cursor-pointer' onClick={() => setStep(2)} />
                <h1 className='font-bold  flex-auto text-center'>Frecuencia</h1>
            </div>
            <RadioGroup label='Frecuencia con la que el paciente va a tomar la medicación'>
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
                <Select label='Se le recordara a partir de las:' className='max-w-xs'>
                    {horas.map((hora, index) => (
                        <SelectItem key={index}>{hora.hora}</SelectItem>
                    ))}
                </Select>
            </div>
            <div>
                <strong>Días de toma</strong>
                <Select label='Debe tomar por:' className='max-w-xs'>
                    {dias.map((dia, index) => (
                        <SelectItem key={index}>{dia.dia}</SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    )
}
