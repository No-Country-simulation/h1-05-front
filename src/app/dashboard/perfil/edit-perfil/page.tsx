'use client'
import { useRouter, usePathname } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'
import ItemPerfil from '@/components/item-perfil'

export default function profile() {
    const route = useRouter()
    const pathname = usePathname()
    console.log(pathname)
    const profile = {
        datosPersonales: [
            {
                icono: '/img/perfil/edit-perfil/perfil-profesional.svg',
                titulo: 'Perfil profesional',
                link: `${pathname}/perfil-profesional`,
            },
            { icono: '/img/perfil/edit-perfil/direccion.svg', titulo: 'Dirección', link: `${pathname}/direccion` },
            {
                icono: '/img/perfil/edit-perfil/lugares-atencion.svg',
                titulo: 'Lugares de atención',
                link: `${pathname}/lugares-atencion`,
            },
            {
                icono: '/img/perfil/edit-perfil/dias-atencion.svg',
                titulo: 'Días de atención',
                link: `${pathname}/dias-atencion`,
            },
            { icono: '/img/perfil/edit-perfil/telefono.svg', titulo: 'Teléfono', link: `${pathname}/telefono` },
        ],
        datosSeguridad: [
            {
                icono: '/img/perfil/edit-perfil/cambiar-contraseña.svg',
                titulo: 'Cambiar contraseña',
                link: `${pathname}/cambiar-contrasena`,
            },
        ],
        coberturasMedicas: [
            { icono: '/img/perfil/edit-perfil/prepagas.svg', titulo: 'Prepagas', link: `${pathname}/prepagas` },
            {
                icono: '/img/perfil/edit-perfil/obras-sociales.svg',
                titulo: 'Obras sociales',
                link: `${pathname}/obras-sociales`,
            },
        ],
        sesion: [
            { icono: '/img/perfil/edit-perfil/licencia.svg', titulo: 'Licencia', link: `${pathname}/licencia` },
            {
                icono: '/img/perfil/edit-perfil/notificaciones.svg',
                titulo: 'Notificaciones',
                link: `${pathname}/notificacion`,
            },
        ],
    }

    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen pb-[90px]'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Editar perfil</h1>
            </div>

            <div className='space-y-4 my-5'>
                <h2 className='font-bold'>Datos personales</h2>
                {profile.datosPersonales.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <h2 className='font-bold'>Datos de seguridad</h2>
                {profile.datosSeguridad.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <h2 className='font-bold'>Coberturas Medicas</h2>
                {profile.coberturasMedicas.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
                <h2 className='font-bold'>Sesión</h2>
                {profile.sesion.map((item, index) => (
                    <ItemPerfil itemProfile={item} key={index} />
                ))}
            </div>
        </div>
    )
}
