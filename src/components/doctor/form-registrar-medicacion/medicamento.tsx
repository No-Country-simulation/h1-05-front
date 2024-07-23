'use client'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

// import CerrarSesion from '@/components/cerrar-sesion'
export default function Medicacion() {
    const route = useRouter()
    const [value, setValue] = useState('')

    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack
                    className='text-[#9A41CE] flex-none hover:cursor-pointer'
                    onClick={() => route.back()}
                />
                <h1 className='font-bold  flex-auto text-center'>Medicamento</h1>
            </div>
            <p>Selecciona el medicamento a asignar.</p>
            <Input
                label='Buscar medicamento'
                color='secondary'
                className='w-full'
                startContent={<IoSearch />}
                // selectionMode='multiple'
                // multiple
                onValueChange={setValue}
                // onValueChange={handleSearch}
            ></Input>
        </div>
    )
}
