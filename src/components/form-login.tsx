'use client'
import { Button, Input } from '@nextui-org/react'
import { FiLogIn } from 'react-icons/fi'
import { RiUserAddLine } from 'react-icons/ri'
import ResetPassword from './reset-pasword'
import { userStore } from '@/store/user-store'
import { useRouter } from 'next/navigation'
import { ImEye } from 'react-icons/im'
import { PiEyeClosed } from 'react-icons/pi'
import { useState } from 'react'

export default function LoginForm() {
    // PENDING: handleSubmit, useStates
    const { user, setUser } = userStore()
    const route = useRouter()
    const [showPass, setShowPass] = useState(false)
    const handleSubmit = () => {
        if (user) {
            route.push('/dashboard')
        } else {
            console.log('no hubo login')
        }
    }
    return (
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-5'>
                <Input type='email' placeholder='Ingrese email' label='Correo' color='secondary' autoComplete='off' onChange={(e) => setUser(e.target.value)} />
                <Input
                    label='Contraseña'
                    placeholder='Ingrese contraseña'
                    color='secondary'
                    type={showPass ? 'text' : 'password'}
                    endContent={
                        <button className='focus:outline-none' type='button' onClick={() => setShowPass(!showPass)}>
                            {showPass ? (
                                <ImEye className='text-2xl text-purple-700 pointer-events-none' />
                            ) : (
                                <PiEyeClosed className='text-2xl text-purple-700 pointer-events-none' />
                            )}
                        </button>
                    }
                />
            </div>

            <ResetPassword />

            <div className='flex flex-col gap-3'>
                <Button color='secondary' onClick={handleSubmit}>
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
