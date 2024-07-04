'use client'

import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
const especialidad = [
    {
        label: 'Doctor',
    },
    {
        label: 'Enfermero',
    },
]

export default function RegisterComponent() {
    // PENDING: handleSubmit, useStates
    const route = useRouter()
    return (
        <form>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 mb-5'>
                <Input name='name' label='Nombre' />
                <Input name='lastname' label='Apellido' />
                <Input name='phoneNumber' label='Teléfono' />
                <Input name='medicalLicense' label='Nº Matrícula' />
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <Select label='Especialidad' className='max-w-xs' selectionMode='multiple'>
                    {especialidad.map((animal) => (
                        <SelectItem key={animal.label}>{animal.label}</SelectItem>
                    ))}
                </Select>
                <Select label='Ciudad' className='max-w-xs'>
                    {especialidad.map((animal) => (
                        <SelectItem key={animal.label}>{animal.label}</SelectItem>
                    ))}
                </Select>
                <Input type='email' name='email' label='Email' placeholder='nombre@dominio.com' />
                <Input type='email' name='emailRepeat' label='Confirmar Email' placeholder='nombre@dominio.com' />
                <Input type='password' name='password' label='Contraseña' />
                <Input type='password' name='passwordRepeat' label='Confirmar Contraseña' />
            </div>

            <div className='mt-4 flex flex-col gap-3 md:flex-row md:justify-between md:gap-5'>
                <Button color='warning' onClick={() => route.back()}>
                    Volver
                </Button>
                <Button color='secondary' type='submit'>
                    Crear cuenta
                </Button>
            </div>
        </form>
    )
}
