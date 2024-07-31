'use client'
import { Button, Image, Input, Link } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useState, Suspense, useEffect } from 'react'
import { toast } from 'sonner'

function ConfirmEmailPage() {
    const params = useSearchParams()
    const [email, setEmail] = useState('')
    const [isActivated, setActivate] = useState(false)
    const [loading, setLoading] = useState(false)
    const token = params.get('token') || ''

    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK}/auth/confirm/resend?email=${email}`)
        if (res.ok) {
            console.log('Email confirmado')
            toast.success(`Verificación solicitada, revise su correo ${email}`)
        } else {
            toast.error('Hubo un error al intentar activar email, intente nuevamente más tarde')
        }
    }

    const confirmEmail = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK}/auth/confirm?token=${token}`)
            if (res.ok) {
                console.log('Email confirmado')
                setActivate(true)
            } else {
                toast.error('Hubo un error al intentar activar email, solicite otro email de recuperación')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        confirmEmail()
    }, [])

    if (!token) {
        return (
            <div className='text-center pt-10'>
                <h1 className='text-2xl font-semibold'>Correo no identificado para activación.</h1>
            </div>
        )
    }

    if (!isActivated)
        return (
            <div className='p-6 max-w-md mx-auto space-y-3'>
                <p>Ingresa el correo para enviar una nueva confirmación</p>
                <form onSubmit={sendForm} className='space-y-3'>
                    <Input
                        type='text'
                        label='Ingrese su correo'
                        color='secondary'
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button color='secondary' type='submit'>
                        Enviar un nuevo email de confirmación
                    </Button>
                </form>
            </div>
        )

    return (
        <div className='flex flex-col items-center py-6'>
            <h2 className='font-bold text-2xl'>Su correo se ha activado exitosamente</h2>
            <p>Puede ingresar con regularidad en el login</p>
            <Image src='/img/ilustracion.png' alt='Imagen de registro exitoso' className='max-w-80' />
            <Link href={'/login'}>
                <Button color='secondary' className='px-20 my-3' isDisabled={loading} isLoading={loading}>
                    Ir al login
                </Button>
            </Link>
        </div>
    )
}

export default function ConfirmPWPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <ConfirmEmailPage />
        </Suspense>
    )
}
