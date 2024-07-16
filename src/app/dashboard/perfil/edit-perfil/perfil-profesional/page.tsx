'use client'

import { Button, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

export default function itemPerfil() {
    const route = useRouter()
    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Perfil profesional</h1>
            </div>
            <div className='m-5 space-y-4'>
                <Select label='Especialidad' color='secondary' selectionMode='multiple'>
                    <SelectItem key={1}>bla</SelectItem>
                    <SelectItem key={2}>bla</SelectItem>
                    <SelectItem key={3}>bla</SelectItem>
                </Select>
                <div className='text-center'>
                    <Button color='secondary' type='submit' className='w-full'>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}
