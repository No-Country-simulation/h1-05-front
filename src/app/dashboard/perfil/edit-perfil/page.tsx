'use client'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

export default function NF() {
    const route = useRouter()
    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Editar perfil</h1>
            </div>
            <h2 className='font-bold'>Datos personales</h2>
        </div>
    )
}
