'use client'

import ResetPassword from '@/components/reset-pasword'
import { Button, Image, Input, Link } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ImEye } from 'react-icons/im'
import { PiEyeClosed } from 'react-icons/pi'
import { toast } from 'sonner'

export default function ResetPasswordPage() {
    const params = useSearchParams()
    const [password, setPassword] = useState('')
    const [hasChanged, setChanged] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const token = params.size > 0 ? params.get('token') : ''

    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK}/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, password }),
            })
            if (res.ok) {
                console.log('Contraseña cambiada')
                setChanged(true)
            } else {
                toast.error('Hubo un error al intentar cambiar contraseña, solicite otro email de recuperación')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (params.size === 0) {
        return (
            <div className='text-center pt-10'>
                <h1 className='text-2xl font-semibold'>Debe ingresar desde el link enviado a su correo</h1>
            </div>
        )
    }

    if (!hasChanged)
        return (
            <div className='p-6 max-w-md mx-auto space-y-3'>
                <p>Ingresa tu nueva contraseña:</p>
                <form onSubmit={sendForm} className='space-y-3'>
                    <Input
                        type={showPass ? 'text' : 'password'}
                        placeholder='Ingrese contraseña'
                        label='Contraseña'
                        color='secondary'
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value)}
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
                    <Button color='secondary' type='submit'>
                        Cambiar contraseña
                    </Button>
                </form>
            </div>
        )

    return (
        <div className='flex flex-col items-center py-6'>
            <h2 className='font-bold text-2xl'>Su contraseña se ha cambiado con éxito</h2>
            <p>Por favor reingrese al login con sus nuevas credenciales</p>
            <Image src='/img/ilustracion.png' alt='Imagen de registro exitoso' className='max-w-80' />
            <Link href={'/login'}>
                <Button color='secondary' className='px-20 my-3' isDisabled={loading} isLoading={loading}>
                    Ir al login
                </Button>
            </Link>
        </div>
    )
}
