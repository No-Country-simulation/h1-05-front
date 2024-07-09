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

type Inputs = {
    email: string;
    password: string;
}

export default function LoginForm() {
    // PENDING: handleSubmit, useStates
    const { user, setUser } = userStore()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(loginSchema)
    })
    console.log(errors)
    const route = useRouter()
    const [showPass, setShowPass] = useState(false)

    // const handleSubmit = () => {
    //     if (user) {
    //         route.push('/dashboard')
    //     } else {
    //         console.log('no hubo login')
    //     }
    // }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(data => {
            console.log(data)
            if (user) {
                route.push('/dashboard')
            } else {
                console.log('no hubo login')
            }
        })}>
            <div className='flex flex-col gap-5'>
                <div>
                    <Input
                        type='email'
                        placeholder='Ingrese email'
                        label='Correo'
                        color='secondary'
                        autoComplete='off'
                        // onChange={(e) => setUser(e.target.value)} 
                        {...register('email')}
                    />
                    {errors.email?.message && <p className='text-red-500 pt-2 text-sm'>{errors.email?.message}</p>}
                </div>

                <div>
                    <Input
                        type={showPass ? 'text' : 'password'}
                        placeholder='Ingrese contraseña'
                        label='Contraseña'
                        color='secondary'
                        autoComplete='off'
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
                    {errors.password?.message && <p className='text-red-500 pt-2 text-sm'>{errors.password?.message}</p>}
                </div>
            </div>

            <ResetPassword />

            <div className='flex flex-col gap-3'>
                <Button color='secondary' type="submit">
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
