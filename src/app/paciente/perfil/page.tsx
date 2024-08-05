'use client'
import ItemPerfil from '@/components/item-perfil'
import CerrarSesion from '@/components/cerrar-sesion'
import { userStore } from '@/store/user-store'
import { Image, Input } from '@nextui-org/react'
import { profileMenuPatient } from '@/constants/menus/doctor/profile-menu'
import { MdFaceUnlock, MdOutlineCall, MdOutlineEmail } from 'react-icons/md'
import EditProfileInput from './editProfileInput'

export default function PerfilPage() {
    const { user } = userStore()
    if (!user) return null
    else
        return (
            <>
                <div className='relative header-doctor flex flex-col items-start justify-between shadow-md mb-6 text-white'>
                    <div className='absolute inset-0 bg-purple-950/90 z-10'></div>
                    <div className='flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4 z-20'>
                        <div>
                            <h1 className='text-3xl font-bold'>
                                {user.firstName} {user.lastName}
                            </h1>
                            <p className='font-bold text-gray-100'>{user.email}</p>
                            <p className='font-bold text-gray-100'>tel: +{user.phone}</p>
                            <p className='font-bold text-gray-100'>DNI: {user.nroDocumento}</p>
                        </div>
                        <Image alt='Doctor' src={user.photo} className='object-cover w-28 relative z-10' />
                    </div>
                </div>
                <div className='space-y-4 my-5 px-6 pb-10'>
                    <div className='mb-6'>
                        <h1 className='text-2xl font-bold text-center md:text-left mb-2'>Edita aquí tus datos</h1>
                        <p className='text-center md:text-left text-gray-600'>
                            Haz clic en el ícono del lápiz en cada input para cambiar tus datos personales.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <EditProfileInput
                            label='Nombre'
                            Icon={MdFaceUnlock}
                            value={user.firstName}
                            userKey='firstName'
                        />
                        <EditProfileInput
                            label='Apellido'
                            Icon={MdFaceUnlock}
                            value={user.lastName}
                            userKey='lastName'
                        />
                        <EditProfileInput label='Teléfono' Icon={MdOutlineCall} value={user.phone} userKey='phone' />
                        <EditProfileInput label='Correo' Icon={MdOutlineEmail} value={user.email} userKey='email' />
                        <EditProfileInput
                            label='Número de DNI'
                            Icon={MdFaceUnlock}
                            value={user.nroDocumento.toString()}
                            userKey='nroDocumento'
                        />
                    </div>
                    <CerrarSesion />
                </div>
            </>
        )
}
