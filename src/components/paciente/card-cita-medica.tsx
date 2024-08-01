'use client'

import { Button, Chip, Image } from '@nextui-org/react'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function cardCitaMedica() {
    return (
        <div className='flex gap-4 items-center justify-between bg-[#EBDCF8] p-4 rounded-md'>
            <div className='flex gap-4 items-center'>
                <Image src='/img/samples/doctor.png' alt='imagen del paciente' className='w-[40px] h-[40px]'></Image>
                <div className='text-secondary'>
                    <h3 className='font-bold'>Dr Gutierrez</h3>
                    <p>Clinica San Diego</p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <Chip className='bg-white'>9:00Hs</Chip>
                <Button isIconOnly className='bg-[#F27685]' aria-label='Borrar'>
                    <RiDeleteBinLine color='white' />
                </Button>
            </div>
        </div>
    )
}
