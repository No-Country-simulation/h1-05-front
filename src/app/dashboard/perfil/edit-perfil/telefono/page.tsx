'use client'

import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

export default function itemPerfil() {
    const route = useRouter()
    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Teléfono</h1>
            </div>
            <div className='m-5 space-y-4'>
                <Input type='number' label='Modificar telefono' color='secondary' />
                <div className='text-center'>
                    <Button color='secondary' type='submit' className='w-full'>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}
