'use client'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'
import ItemPerfil from '@/components/item-perfil'
import { profileMenu } from '@/constants/menus/doctor/profile-menu'
import CerrarSesion from '@/components/cerrar-sesion'

export default function profile() {
    const route = useRouter()

    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen max-w-md mx-auto pb-[90px]'>
            {/* componetizar botón */}
            <div className='flex items-center justify-center'>
                <IoIosArrowBack
                    className='text-[#9A41CE] flex-none hover:cursor-pointer'
                    onClick={() => route.back()}
                />
                <h1 className='font-bold  flex-auto text-center'>Editar perfil</h1>
            </div>

            {/* componetizar datos */}
            <div className='space-y-4 my-5'>
                <h2 className='font-bold'>Datos personales</h2>
                {profileMenu.datosPersonales.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <h2 className='font-bold'>Datos de seguridad</h2>
                {profileMenu.datosSeguridad.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <h2 className='font-bold'>Coberturas Medicas</h2>
                {profileMenu.coberturasMedicas.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <h2 className='font-bold'>Sesión</h2>
                {profileMenu.sesion.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <CerrarSesion />
            </div>
        </div>
    )
}
