'use client'
import { Button, Input } from '@nextui-org/react'
import { FiLogIn } from 'react-icons/fi'
import { RiUserAddLine } from 'react-icons/ri'
import ResetPassword from './reset-pasword'
import { userStore } from '@/store/user-store'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    // PENDING: handleSubmit, useStates
    const { user, setUser } = userStore()
    const route = useRouter()
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
                <Input type='password' placeholder='Ingrese contraseña' label='Contraseña' color='secondary' autoComplete='off' />
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
