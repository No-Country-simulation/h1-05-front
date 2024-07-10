'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FaExclamationTriangle } from 'react-icons/fa'
import { FaReply } from 'react-icons/fa6'

export default function NF() {
    const route = useRouter()
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
            <div className='bg-white p-8 rounded shadow-md text-center max-w-md w-full'>
                <FaExclamationTriangle className='text-yellow-500 text-6xl mb-4' />
                <h1 className='text-2xl font-bold mb-2'>Página no encontrada</h1>
                <p className='text-gray-600 mb-6'>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
                <Button color='primary' onClick={() => route.back()}>
                    <FaReply />
                    Volver
                </Button>
            </div>
        </div>
    )
}
