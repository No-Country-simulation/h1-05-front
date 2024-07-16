'use client'

import { Button, Input, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

export default function itemPerfil() {
    const route = useRouter()
    const [selectedValue, setSelectedValue] = useState('option1')

    const handleChange = (value: string) => {
        setSelectedValue(value)
        // Do something with the selected value
    }
    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Notificaciones</h1>
            </div>
            <div className='m-5 space-y-4'>
                <p>Deseas permitir notificaciones?</p>
                <RadioGroup value={selectedValue} onValueChange={handleChange}>
                    <Radio value='si'>Si</Radio>
                    <Radio value='no'>No</Radio>
                </RadioGroup>
                <div className='text-center'>
                    <Button color='secondary' type='submit' className='w-full'>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}
