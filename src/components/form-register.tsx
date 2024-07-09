'use client'

import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, mappedEspecialidades } from '@/validations/registerSchema'
import { ZodType } from 'zod'

type Inputs = {
    name: string;
    lastname: string;
    phoneNumber: string;
    medicalLicense: string;
    dni: string;    
    especialidad: string;
    location: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(registerSchema)
    })

    const especialidadesOptions = Object.entries(mappedEspecialidades).map(([key, value]) => (
        <SelectItem value={key} key={key}>{value}</SelectItem>
    ))
    // PENDING: handleSubmit, useStates
    const route = useRouter()
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 mb-5'>
                <div>
                    <Input type='text' label='Nombre' {...register('name')} />
                    {errors.name?.message && <p className='text-red-500 pt-2 text-sm'>{errors.name?.message}</p>}
                </div>
                <div>
                    <Input label='Apellido' {...register('lastname')} />
                    {errors.lastname?.message && <p className='text-red-500 pt-2 text-sm'>{errors.lastname?.message}</p>}
                </div>
                <div>
                    <Input label='Teléfono' {...register('phoneNumber')} />
                    {errors.phoneNumber?.message && <p className='text-red-500 pt-2 text-sm'>{errors.phoneNumber?.message}</p>}
                </div>
                <div>
                    <Input label='Nº Matrícula' {...register('medicalLicense')} />
                    {errors.medicalLicense?.message && <p className='text-red-500 pt-2 text-sm'>{errors.medicalLicense?.message}</p>}
                </div>
                <div>
                    <Input label='DNI/Documento' {...register('dni')} />
                    {errors.dni?.message && <p className='text-red-500 pt-2 text-sm'>{errors.dni?.message}</p>}
                </div>
                <div>
                    <Input label='Location' {...register('location')} />
                    {errors.location?.message && <p className='text-red-500 pt-2 text-sm'>{errors.location?.message}</p>}
                </div>
                
            {/* </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'> */}
                <div>
                    <Select label='Especialidad' className='max-w-xs' selectionMode='multiple' {...register('especialidad')}>
                        {especialidadesOptions}
                    </Select>
                    {errors.especialidad?.message && <p className='text-red-500 pt-2 text-sm'>{errors.especialidad?.message}</p>}
                </div>
                <div>
                    <Input type='email' label='Email' placeholder='nombre@dominio.com' {...register('email')} />
                    {errors.email?.message && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div>
                    <Input type='password' label='Contraseña' {...register('password')} />
                    {errors.password?.message && <p className='text-red-500 pt-2 text-sm'>{errors.password?.message}</p>}
                </div>
                <div>
                    <Input type='password' label='Confirmar Contraseña' {...register('confirmPassword')} />
                    {errors.confirmPassword?.message && <p className='text-red-500 pt-2 text-sm'>{errors.confirmPassword?.message}</p>}
                </div>

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
