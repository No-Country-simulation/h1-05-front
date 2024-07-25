'use client'

import ResetPassword from '@/components/reset-pasword'
import { Button, Input } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function ResetPasswordPage() {
    const params = useSearchParams()
    const [password, setPassword] = useState('')
    const query = params.size > 0 ? params.get('token') : ''

    console.log(query)

    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    if (params.size === 0) {
        return (
            <div className='text-center pt-10'>
                <h1 className='text-2xl font-semibold'>Debe ingresar desde el link enviado a su correo</h1>
            </div>
        )
    }
    return (
        <div className='p-6 max-w-md mx-auto space-y-3'>
            <p>Ingresa tu nueva contraseña</p>
            <form onSubmit={sendForm}>
                <Input color='secondary' label='Contraseña' onChange={(e) => setPassword(e.target.value)} />
                <Button color='secondary' type='submit'>
                    Cambiar contraseña
                </Button>
            </form>
        </div>
    )
}
