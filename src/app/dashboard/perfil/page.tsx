'use client'

import { userStore } from '@/store/user-store'
import { Button, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import HeaderPerfilDoctor from '@/components/doctor/header-perfil'
// Datos de prueba
import { medico } from '@/constants/demo-medico'
export default function PerfilPage() {
    const { cerrarSesion } = userStore()
    const route = useRouter()

    const handleCerrarSesion = () => {
        cerrarSesion()
        route.push('/login')
    }
    return (
        <div className='min-h-screen '>
            <HeaderPerfilDoctor medico={medico} />
            <h2>Pagina del perfil</h2>
            <Button color='secondary' onClick={handleCerrarSesion}>
                Cerrar sesión
            </Button>
        </div>
    )
}
