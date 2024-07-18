'use client'
import { userStore } from '@/store/user-store'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { MdOutlineLogout } from 'react-icons/md'

export default function CerrarSesion() {
    const { cerrarSesion } = userStore() //cliente
    const route = useRouter() //cliente x2

    const handleCerrarSesion = () => {
        cerrarSesion()
        route.push('/login')
    }
    return (
        <>
            {/* <Button color='secondary' onClick={handleCerrarSesion}>
                Cerrar sesión
            </Button> */}
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
