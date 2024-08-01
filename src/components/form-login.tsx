'use client'
import { Button, Input } from '@nextui-org/react'
import { FiLogIn } from 'react-icons/fi'
import { RiUserAddLine } from 'react-icons/ri'
import ResetPassword from './reset-pasword'
import { userStore } from '@/store/user-store'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/validations/loginSchema'

import { ImEye } from 'react-icons/im'
import { PiEyeClosed } from 'react-icons/pi'
import { useState } from 'react'
import { toast } from 'sonner'
import { tokenData } from '@/utils/jwt-decode'
import { Medico, Paciente } from '@/interfaces/user.interface'

type Inputs = {
    email: string
    password: string
}

export default function LoginForm() {
    // PENDING: handleSubmit, useStates
    const { setUser, setToken } = userStore()
    const [isLoading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(loginSchema),
    })
    const route = useRouter()
    const [showPass, setShowPass] = useState(false)

    const submitData = async (data: Inputs) => {
        // info del user viene de la db
        const loginResponse = await fetchLogin(data.email, data.password)
        if (!loginResponse) {
            return toast.error('Fallaron las credenciales de acceso', {
                position: 'top-center',
                className: 'bg-red-600 text-white',
                duration: 2000,
            })
        }
        if (loginResponse.user.role === 'MEDICO') {
            toast.success('Ingreso correcto...', {
                className: 'bg-green-600 text-white',
                position: 'top-center',
                duration: 2000,
            })
            route.push('/dashboard')
        }
        if (loginResponse.user.role === 'PACIENTE') {
            toast.success('Ingreso correcto...', {
                className: 'bg-green-600 text-white',
                position: 'top-center',
                duration: 2000,
            })
            route.push('/paciente')
        }
    }

    const fetchLogin = async (email: string, password: string) => {
        const urlBack = process.env.NEXT_PUBLIC_URL_BACK
        interface UserLogin {
            accessToken: string
            refreshToken: string
            user: Paciente & Medico
        }

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)

        try {
            setLoading(true)
            const res = await fetch(`${urlBack}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
                signal: controller.signal,
            })

            clearTimeout(timeoutId)
            if (res.ok) {
                const data: UserLogin = await res.json()
                console.log({ infoToken: tokenData(data.accessToken), data })
                setUser(data.user)
                setToken(data.accessToken)
                return data
            }
            return null
        } catch (error) {
            console.log(error)
            return null
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(submitData)}>
            <div className='flex flex-col gap-5'>
                <div>
                    <Input
                        isInvalid={errors.email?.message ? true : false}
                        errorMessage={errors.email?.message}
                        type='email'
                        placeholder='Ingrese email'
                        label='Correo'
                        color='secondary'
                        autoComplete='off'
                        {...register('email')}
                    />
                </div>

                <div>
                    <Input
                        type={showPass ? 'text' : 'password'}
                        placeholder='Ingrese contraseña'
                        label='Contraseña'
                        color='secondary'
                        autoComplete='off'
                        isInvalid={errors.password?.message ? true : false}
                        errorMessage={errors.password?.message}
                        endContent={
                            <button className='focus:outline-none' type='button' onClick={() => setShowPass(!showPass)}>
                                {showPass ? (
                                    <ImEye className='text-2xl text-purple-700 pointer-events-none' />
                                ) : (
                                    <PiEyeClosed className='text-2xl text-purple-700 pointer-events-none' />
                                )}
                            </button>
                        }
                        {...register('password')}
                    />
                </div>
            </div>

            <ResetPassword />

            <div className='flex flex-col gap-3'>
                <Button color='secondary' type='submit' isLoading={isLoading} isDisabled={isLoading}>
                    <FiLogIn className='text-xl' />
                    <p>Ingresar</p>
                </Button>
                <Button color='warning' onClick={() => route.push('/register')} isLoading={isLoading}>
                    <RiUserAddLine className='text-xl' />
                    <p>Registrarse</p>
                </Button>
                <div className='flex justify-between'>
                    <Button
                        color='primary'
                        variant='ghost'
                        isLoading={isLoading}
                        isDisabled={isLoading}
                        onClick={() => submitData({ email: 'medicuser@test.justina.io', password: 'password123' })}
                    >
                        <p>Demo Médico</p>
                    </Button>
                    <Button
                        color='primary'
                        variant='ghost'
                        isLoading={isLoading}
                        isDisabled={isLoading}
                        onClick={() => submitData({ email: 'patient@test.justina.io', password: 'patient123' })}
                    >
                        <p>Demo Paciente</p>
                    </Button>
                </div>
            </div>
        </form>
    )
}
