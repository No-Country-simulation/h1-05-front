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
import { Medico } from '@/interfaces/user.interface'
import { medico } from '@/constants/demo-medico'

type Inputs = {
    email: string
    password: string
}

export default function LoginForm() {
    // PENDING: handleSubmit, useStates
    const { user, setUser } = userStore()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(loginSchema),
    })

    const route = useRouter()
    const [showPass, setShowPass] = useState(false)

    const submitData = (data: Inputs) => {
        // info del user viene de la db
        // hacer fetch
        console.log('todos los campos son validos')
        setUser(medico)
        route.push('/dashboard')
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
                        // onChange={(e) => setUser(e.target.value)}
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
                <Button color='secondary' type='submit'>
                    <FiLogIn className='text-xl' />
                    <p>Ingresar</p>
                </Button>
                <Button color='warning' onClick={() => route.push('/register')}>
                    <RiUserAddLine className='text-xl' />
                    <p>Registrarse</p>
                </Button>
            </div>
        </form>
    )
}
