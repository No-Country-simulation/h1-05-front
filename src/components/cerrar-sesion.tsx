'use client'
import { userStore } from '@/store/user-store'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function CerrarSesion() {
    const { cerrarSesion } = userStore() //cliente
    const route = useRouter() //cliente x2

    const handleCerrarSesion = () => {
        cerrarSesion()
        route.push('/login')
    }
    return (
        <>
            <Button color='secondary' onClick={handleCerrarSesion}>
                Cerrar sesión
            </Button>
        </>
    )
}
