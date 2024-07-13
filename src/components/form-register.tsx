'use client'

import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, mappedEspecialidades } from '@/validations/registerSchema'

type Inputs = {
    name: string
    lastname: string
    phoneNumber: string
    medicalLicense: string
    dni: string
    especialidad: string
    location: string
    email: string
    confirmEmail: string
    password: string
    confirmPassword: string
}

export default function RegisterComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<Inputs>({
        resolver: zodResolver(registerSchema),
    })

    const especialidadesOptions = Object.entries(mappedEspecialidades).map(([key, value]) => (
        <SelectItem value={key} key={key}>
            {value}
        </SelectItem>
    ))
    // PENDING: handleSubmit, useStates
    const route = useRouter()
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 mb-5'>
                <div>
                    <Input
                        type='text'
                        errorMessage={errors.name?.message}
                        isInvalid={errors.name?.message ? true : false}
                        label='Nombre'
                        {...register('name')}
                    />
                </div>
                <div>
                    <Input
                        errorMessage={errors.lastname?.message}
                        isInvalid={errors.lastname?.message ? true : false}
                        label='Apellido'
                        {...register('lastname')}
                    />
                </div>
                <div>
                    <Input
                        errorMessage={errors.phoneNumber?.message}
                        isInvalid={errors.phoneNumber?.message ? true : false}
                        label='Teléfono'
                        {...register('phoneNumber')}
                    />
                </div>
                <div>
                    <Input
                        errorMessage={errors.medicalLicense?.message}
                        isInvalid={errors.medicalLicense?.message ? true : false}
                        label='Nº Matrícula'
                        {...register('medicalLicense')}
                    />
                </div>
                <div>
                    <Input
                        errorMessage={errors.dni?.message}
                        isInvalid={errors.dni?.message ? true : false}
                        label='DNI/Documento'
                        {...register('dni')}
                    />
                </div>
                <div>
                    <Input
                        errorMessage={errors.location?.message}
                        isInvalid={errors.location?.message ? true : false}
                        label='Location'
                        {...register('location')}
                    />
                </div>

                {/* </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'> */}
                <div>
                    <Select
                        errorMessage={errors.especialidad?.message}
                        isInvalid={errors.especialidad?.message ? true : false}
                        label='Especialidad'
                        className='max-w-xs'
                        selectionMode='multiple'
                        {...register('especialidad')}
                    >
                        {especialidadesOptions}
                    </Select>{' '}
                </div>
                <div>
                    <Input
                        type='email'
                        errorMessage={errors.email?.message}
                        isInvalid={errors.email?.message ? true : false}
                        label='Email'
                        placeholder='nombre@dominio.com'
                        {...register('email')}
                    />{' '}
                </div>

                <div>
                    <Input
                        isInvalid={errors.password?.message ? true : false}
                        errorMessage={errors.password?.message}
                        type='password'
                        label='Contraseña'
                        {...register('password')}
                    />
                </div>
                <div>
                    <Input
                        isInvalid={getValues().password !== getValues().confirmPassword}
                        errorMessage='Las contraseñas no coinciden'
                        type='password'
                        label='Confirmar Contraseña'
                        {...register('confirmPassword')}
                    />
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
