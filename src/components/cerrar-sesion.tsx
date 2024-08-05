'use client'
import { eventsUserStore } from '@/store/events-user'
import { userStore } from '@/store/user-store'
import { useRouter } from 'next/navigation'
import { MdOutlineLogout } from 'react-icons/md'

export default function CerrarSesion() {
    const { cerrarSesion } = userStore()
    const { cleanEvents } = eventsUserStore()
    const route = useRouter()

    const handleCerrarSesion = () => {
        cerrarSesion()
        cleanEvents()
        route.push('/login')
    }

    return (
        <>
            <div
                className='flex flex-row items-center gap-4 bg-white rounded-full hover:cursor-pointer'
                onClick={handleCerrarSesion}
            >
                <div className='w-10 h-10 bg-secondary  rounded-xl flex items-center justify-center'>
                    <MdOutlineLogout className='text-xl text-white' />
                </div>
                <h3 className='flex-grow'>Cerrar sesión</h3>
            </div>
        </>
    )
}
