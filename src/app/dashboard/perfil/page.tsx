'use client'

import { userStore } from '@/store/user-store'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function PerfilPage() {
    const { cerrarSesion } = userStore()
    const route = useRouter()

    const handleCerrarSesion = () => {
        cerrarSesion()
        route.push('/login')
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h2>Pagina del perfil</h2>
            <Button color='secondary' onClick={handleCerrarSesion}>
                Cerrar sesión
            </Button>
        </div>
    )
}
