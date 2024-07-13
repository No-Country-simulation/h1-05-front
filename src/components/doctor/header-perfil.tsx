import { Medico } from '@/interfaces/user.interface'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { IoMdSettings } from 'react-icons/io'

export default function HeaderDoctor({ medico }: { medico: Medico }) {
    const route = useRouter()
    return (
        <div className='bg-[url("/img/perfil/background-header.jpeg")] bg-cover p-4'>
            <div className='flex flex-row-reverse mb-4' onClick={() => route.push('/dashboard/perfil/edit-perfil')}>
                <div className='w-11 h-11 bg-secondary flex justify-center items-center rounded-xl'>
                    <IoMdSettings color='white' className='w-5 h-5' />
                </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <Image src={medico.img} className='w-32 h-32'></Image>
                <h2 className='text-3xl'>{medico.name}</h2>
            </div>
        </div>
    )
}
