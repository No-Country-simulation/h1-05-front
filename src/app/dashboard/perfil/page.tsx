'use client'
import HeaderPerfilDoctor from '@/components/doctor/header-perfil'
import CerrarSesion from '@/components/cerrar-sesion'
import { userStore } from '@/store/user-store'
import { Medico } from '@/interfaces/user.interface'
import EditProfileInput from '@/app/paciente/perfil/editProfileInput'
import { MdFaceUnlock, MdOutlineCall, MdOutlineEmail } from 'react-icons/md'

export default function PerfilPage() {
    const { user } = userStore()
    if (!user) return null
    else
        return (
            <div className='min-h-screen pb-20 md:pb-0'>
                <HeaderPerfilDoctor medico={user as Medico} />
                <div className='space-y-4 my-5 px-6'>
                    <EditProfileInput label='Nombre' Icon={MdFaceUnlock} value={user.firstName} userKey='firstName' />
                    <EditProfileInput label='Apellido' Icon={MdFaceUnlock} value={user.lastName} userKey='lastName' />
                    <EditProfileInput label='Teléfono' Icon={MdOutlineCall} value={user.phone} userKey='phone' />
                    <EditProfileInput label='Correo' Icon={MdOutlineEmail} value={user.email} userKey='email' />
                    <EditProfileInput
                        label='Número de DNI'
                        Icon={MdFaceUnlock}
                        value={user.nroDocumento.toString()}
                        userKey='nroDocumento'
                    />
                    <CerrarSesion />
                </div>
            </div>
        )
}
