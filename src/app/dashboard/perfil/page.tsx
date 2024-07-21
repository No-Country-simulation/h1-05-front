'use client'
import HeaderPerfilDoctor from '@/components/doctor/header-perfil'
// Datos de prueba
import { medico } from '@/constants/demo-medico'
import { profileMenu } from '@/constants/menus/doctor/profile-menu'
import ItemPerfil from '@/components/item-perfil'
import CerrarSesion from '@/components/cerrar-sesion'
// import CerrarSesion from '@/components/cerrar-sesion'
export default async function PerfilPage() {
    return (
        <div className='min-h-screen'>
            <HeaderPerfilDoctor medico={medico} />
            <div className='space-y-4 my-5 px-6'>
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
