import { Medico } from '@/interfaces/user.interface'
import { Image } from '@nextui-org/react'

export default function HeaderDoctor({ medico }: { medico: Medico }) {
    return (
        <div className='bg-[url("/img/perfil/background-header.jpeg")] bg-cover p-4'>
            <div className='flex flex-row items-center justify-center gap-6'>
                <Image src={medico.photo} className='w-28 h-28 object-cover drop-shadow-xl' />
                <div className='flex flex-col'>
                    <h2 className='text-3xl'>
                        {medico.firstName} {medico.lastName}
                    </h2>
                    <p className='font-bold text-sm italic'>{medico.email}</p>
                    <p className='font-bold text-sm'>Teléfono: +{medico.phone}</p>
                    {medico.especialidad && <p className='font-bold text-sm'>Especialidad: {medico.especialidad}</p>}
                </div>
            </div>
        </div>
    )
}
