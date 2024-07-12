'use client'

import { Autocomplete, AutocompleteItem, Button, Input, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validations/registerSchema'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useState } from 'react'
import { Ciudades, municipios_arg } from '@/constants/nomenclaturas/municipios_arg'
import { especialidades } from '@/constants/nomenclaturas/especialidades'

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
    const [step, setStep] = useState<1 | 2>(1)
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<Inputs>({
        resolver: zodResolver(registerSchema),
    })

    // PENDING: handleSubmit, useStates
    const handleFormSend = (data: Inputs) => {
        console.log(data)
    }

    const [ciudades, setCiudades] = useState<Ciudades[]>([])

    const handleSelectChange = (provincia: string) => {
        if (!provincia) {
            setCiudades([])
        } else {
            const ciudades: Ciudades[] = municipios_arg[provincia]
            setCiudades(ciudades)
        }
    }
    return (
        <form onSubmit={handleSubmit(handleFormSend)}>
            {step === 1 && (
                <RadioGroup label='Selecciona tipo de cuenta:' className='mb-4' color='secondary' defaultValue='medico'>
                    <Radio value='medico'>Médico</Radio>
                    <Radio value='paciente'>Paciente</Radio>
                    {/* <Radio value='entidad'>Entidad/Clínica/Hospital</Radio> */}
                </RadioGroup>
            )}
            {step === 1 ? (
                <div className='grid gap-5 grid-cols-1 mb-5'>
                    <Input
                        color='secondary'
                        errorMessage={errors.name?.message}
                        isInvalid={errors.name?.message ? true : false}
                        label='Nombre'
                        {...register('name')}
                    />
                    <Input
                        color='secondary'
                        errorMessage={errors.lastname?.message}
                        isInvalid={errors.lastname?.message ? true : false}
                        label='Apellido'
                        {...register('lastname')}
                    />
                    <Input
                        color='secondary'
                        type='email'
                        isInvalid={errors.email?.message ? true : false}
                        errorMessage={errors.email?.message}
                        label='Email'
                        placeholder='nombre@dominio.com'
                        {...register('email')}
                    />
                    <Input
                        color='secondary'
                        isInvalid={errors.password?.message ? true : false}
                        errorMessage={errors.password?.message}
                        type='password'
                        label='Contraseña'
                        {...register('password')}
                    />
                    <Input
                        color='secondary'
                        isInvalid={getValues().password !== getValues().confirmPassword}
                        errorMessage='Las contraseñas no coinciden'
                        type='password'
                        label='Confirmar Contraseña'
                        {...register('confirmPassword')}
                    />
                </div>
            ) : (
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 mb-5'>
                    <Input
                        color='secondary'
                        errorMessage={errors.phoneNumber?.message}
                        isInvalid={errors.phoneNumber?.message ? true : false}
                        label='Teléfono'
                        {...register('phoneNumber')}
                    />
                    <Input
                        color='secondary'
                        errorMessage={errors.medicalLicense?.message}
                        isInvalid={errors.medicalLicense?.message ? true : false}
                        label='Nº Matrícula'
                        {...register('medicalLicense')}
                    />
                    <Input
                        color='secondary'
                        errorMessage={errors.dni?.message}
                        isInvalid={errors.dni?.message ? true : false}
                        label='DNI/Documento'
                        {...register('dni')}
                    />
                    {/* <Select
                        color='secondary'
                        errorMessage={errors.especialidad?.message}
                        isInvalid={errors.especialidad?.message ? true : false}
                        label='Especialidad'
                        className='w-full'
                        selectionMode='multiple'
                        {...register('especialidad')}
                    >
                        {especialidadesOptions}
                    </Select> */}
                    <Select
                        label='Seleccione especialidad'
                        color='secondary'
                        errorMessage={errors.especialidad?.message}
                        isInvalid={errors.especialidad?.message ? true : false}
                        className='w-full'
                        selectionMode='multiple'
                        {...register('especialidad')}
                    >
                        {especialidades.map((especialidad) => (
                            <SelectItem key={especialidad.id} value={especialidad.nombre}>
                                {especialidad.nombre}
                            </SelectItem>
                        ))}
                    </Select>

                    <Autocomplete
                        onInputChange={handleSelectChange}
                        color='secondary'
                        label='Seleccione provincia'
                        className='w-full'
                    >
                        {Object.keys(municipios_arg).map((provincia) => (
                            <AutocompleteItem value={provincia} key={provincia}>
                                {provincia}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>

                    <Autocomplete
                        isDisabled={ciudades.length === 0}
                        label='Seleccione ciudad'
                        color='secondary'
                        className='w-full'
                    >
                        {ciudades.map((ciudad) => (
                            <AutocompleteItem value={ciudad.id} key={ciudad.id}>
                                {ciudad.comuna}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                </div>
            )}
            <Button color='secondary' className='w-full mb-4' onClick={() => setStep(step === 1 ? 2 : 1)}>
                {step === 1 ? (
                    <>
                        Siguiente <GrNext />
                    </>
                ) : (
                    <>
                        <GrPrevious /> Anterior
                    </>
                )}
            </Button>
            {step === 2 && (
                <Button color='warning' className='w-full' variant='shadow' type='submit'>
                    Crear cuenta
                </Button>
            )}
        </form>
    )
}
