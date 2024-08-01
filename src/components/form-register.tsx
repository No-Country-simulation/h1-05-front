'use client'

import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Checkbox,
    DatePicker,
    Input,
    Radio,
    RadioGroup,
    Select,
    Selection,
    SelectItem,
    Slider,
} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validations/registerSchema'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useEffect, useState } from 'react'
import { Ciudades, municipios_arg } from '@/constants/nomenclaturas/municipios_arg'
import { especialidades } from '@/constants/nomenclaturas/especialidades'
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi'
import FormImage from './formImage'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { DateValue, parseDate, today, getLocalTimeZone } from '@internationalized/date'

type Inputs = {
    name: string
    lastName: string
    sex: string
    deseaDonar: boolean
    phoneNumber: string
    medicalLicense: string
    dni: string
    especialidad: string[]
    provincia: string
    ciudad: string
    email: string
    confirmEmail: string
    password: string
    confirmPassword: string
}

export default function RegisterComponent() {
    const [step, setStep] = useState<1 | 2>(1)
    const [passPower, setPassPower] = useState(0)
    const [passColor, setPassColor] = useState<'danger' | 'warning' | 'success'>('danger')
    const [role, setRole] = useState<'MEDICO' | 'PACIENTE' | 'ADMINISTRADOR'>('MEDICO')
    const [file, setFile] = useState<string | null>(null)
    const [isLoading, setLoading] = useState(false)
    const [fechaNacimiento, setNacimiento] = useState<DateValue>(parseDate('1990-12-12'))
    const [deseaDonar, setDonar] = useState(true)
    const [ciudades, setCiudades] = useState<Ciudades[]>([])
    const [photo, setPhoto] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        trigger,
        watch,
    } = useForm<Inputs>({
        resolver: zodResolver(registerSchema),
    })
    const route = useRouter()

    // PENDING: handleSubmit, useStates
    const handleFormSend = async (data: Inputs) => {
        setLoading(true)
        console.log({ ...data, fechaNacimiento, deseaDonar, file })
        const url = process.env.NEXT_PUBLIC_URL_BACK
        const timeZoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
        let newPhoto = photo
            ? photo
            : 'https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg'
        try {
            const res = await fetch(`${url}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    firstName: data.name,
                    lastName: data.lastName,
                    phone: data.phoneNumber,
                    province: data.provincia,
                    city: data.ciudad,
                    license: data.medicalLicense,
                    nroDocumento: Number(data.dni),
                    speciality: data.especialidad[0],
                    sex: data.sex,
                    photo: newPhoto,
                    fechaNacimiento: fechaNacimiento.toDate(timeZoneClient).toISOString(),
                    deseaDonar,
                }),
            })

            const dataRes = await res.json()
            console.log({ dataRes })
            if (res.ok) {
                toast.success('Registrado exitosamente')
                route.push('/register/success')
            } else {
                toast.error('No se pudo realizar el registro, intente más tarde.')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleProvinciaSelect = (provincia: string) => {
        if (!provincia) {
            setCiudades([])
            setValue('ciudad', '')
            setValue('provincia', '')
        } else {
            setValue('provincia', provincia)
            const ciudades: Ciudades[] = municipios_arg[provincia]
            setCiudades(ciudades)
        }
        trigger('provincia')
    }

    const handleCiudadSelect = (ciudad: string) => {
        if (!ciudad) {
            setValue('ciudad', '')
        } else {
            setValue('ciudad', ciudad)
        }
        trigger('ciudad')
    }

    const handleSelectEspecialidad = (keys: Selection) => {
        const arrEsp = Array.from(keys) as string[]
        setValue('especialidad', arrEsp)
        trigger('especialidad')
    }

    const validatePassword = (password: string): number => {
        let score = 0
        if (password.length >= 7) score += 1 // Al menos 7 caracteres
        if (password.length >= 11) score += 1 // Al menos 11 caracteres
        if (/[A-Z]/.test(password)) score += 1 // Contiene letras mayúsculas
        if (/[a-z]/.test(password)) score += 1 // Contiene letras minúsculas
        if (/\d/.test(password)) score += 1 // Contiene números
        if (/[@$!%*?&]/.test(password)) score += 1 // Contiene caracteres especiales
        return score
    }

    const validateNacimiento = () => {
        if (!fechaNacimiento) return 'Debe ingresar su nacimiento'
        if (fechaNacimiento.compare(parseDate('1910-01-01')) < 0) return 'Seleccione una fecha mayor'
        if (fechaNacimiento.compare(today(getLocalTimeZone())) > 0) return 'Seleccione una fecha menor'
        return 'Fecha inválida'
    }

    const isInvalidNacimiento = () => {
        return (
            !fechaNacimiento ||
            fechaNacimiento.compare(parseDate('1910-01-01')) < 0 ||
            fechaNacimiento.compare(today(getLocalTimeZone())) > 0
        )
    }

    useEffect(() => {
        const pass = getValues('password')
        const score = validatePassword(pass || '')
        setPassPower(score)
        if (score <= 2) setPassColor('danger')
        else if (score <= 4) setPassColor('warning')
        else setPassColor('success')
    }, [watch('password'), watch('confirmPassword')])

    useEffect(() => {
        if (file) {
            setPhoto(file)
        }
    }, [file])
    return (
        <form onSubmit={handleSubmit(handleFormSend)}>
            {step === 1 && (
                <>
                    {/* <RadioGroup
                        orientation='horizontal'
                        onValueChange={(value) => setRole(value)}
                        label='Selecciona tipo de cuenta:'
                        className='mb-4'
                        color='secondary'
                        defaultValue={role}
                    >
                        <Radio value='MEDICO'>Médico</Radio>
                        <Radio value='PACIENTE'>Paciente</Radio>
                    </RadioGroup> */}
                    <FormImage setFile={setFile} />
                </>
            )}
            {step === 1 && (
                <div className='grid gap-5 grid-cols-1 mb-5'>
                    <Select
                        color='secondary'
                        errorMessage={errors.sex?.message}
                        isInvalid={errors.sex?.message ? true : false}
                        label='Seleccione su género'
                        defaultSelectedKeys={['FEMENINO']}
                        {...register('sex')}
                    >
                        <SelectItem key='FEMENINO'>Femenino</SelectItem>
                        <SelectItem key='MASCULINO'>Masculino</SelectItem>
                    </Select>
                    <Input
                        color='secondary'
                        errorMessage={errors.name?.message}
                        isInvalid={errors.name?.message ? true : false}
                        label='Nombre'
                        {...register('name')}
                    />
                    <Input
                        color='secondary'
                        errorMessage={errors.lastName?.message}
                        isInvalid={errors.lastName?.message ? true : false}
                        label='Apellido'
                        {...register('lastName')}
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
                    <Slider
                        size='md'
                        color={passColor}
                        value={passPower}
                        minValue={0}
                        maxValue={6}
                        hideThumb
                        hideValue
                        startContent={<BiSolidLockOpen className='text-2xl text-red-700' />}
                        endContent={<BiSolidLock className='text-2xl text-green-700' />}
                        className='pointer-events-none mx-auto'
                        defaultValue={0}
                        label={
                            passPower === 0
                                ? 'Escriba contraseña'
                                : passPower === 1
                                ? 'Contraseña insuficiente'
                                : passPower === 2
                                ? 'Fácilmente hackeable'
                                : passPower === 3
                                ? 'Mínimo de seguridad'
                                : passPower === 4
                                ? 'Contraseña aceptable'
                                : passPower === 5
                                ? 'Contraseña robusta'
                                : '¡Bien! Ni mr.robot puede con esa clave'
                        }
                    />
                </div>
            )}

            {step !== 1 && role === 'MEDICO' && (
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 mb-5'>
                    <DatePicker
                        label='Fecha de nacimiento'
                        color='secondary'
                        isInvalid={isInvalidNacimiento()}
                        minValue={parseDate('1910-01-01')}
                        maxValue={today(getLocalTimeZone())}
                        errorMessage={validateNacimiento()}
                        showMonthAndYearPickers
                        value={fechaNacimiento}
                        onChange={setNacimiento}
                    />
                    <Checkbox color='warning' isSelected={deseaDonar} onValueChange={setDonar}>
                        Soy donante
                    </Checkbox>
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
                    <Select
                        label='Seleccione especialidad'
                        color='secondary'
                        errorMessage={errors.especialidad?.message}
                        isInvalid={errors.especialidad?.message ? true : false}
                        className='w-full'
                        selectionMode='multiple'
                        multiple
                        onSelectionChange={handleSelectEspecialidad}
                    >
                        {especialidades.map((especialidad) => (
                            <SelectItem key={especialidad.id} value={especialidad.nombre}>
                                {especialidad.nombre}
                            </SelectItem>
                        ))}
                    </Select>

                    <Autocomplete
                        onInputChange={handleProvinciaSelect}
                        errorMessage={errors.provincia?.message}
                        isInvalid={errors.provincia?.message ? true : false}
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
                        onInputChange={handleCiudadSelect}
                        errorMessage={errors.ciudad?.message}
                        isInvalid={errors.ciudad?.message ? true : false}
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
                <Button
                    color='warning'
                    className='w-full'
                    variant='shadow'
                    type='submit'
                    disabled={isLoading}
                    isLoading={isLoading}
                >
                    Crear cuenta
                </Button>
            )}
        </form>
    )
}
