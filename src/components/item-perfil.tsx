'use client'
import { ItemProfile } from '@/interfaces/user.interface'
import { useRouter } from 'next/navigation'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function itemPerfil({ itemProfile }: { itemProfile: ItemProfile }) {
    const { Icono } = itemProfile
    const route = useRouter()
    return (
        <div
            className='flex flex-row items-center gap-4 bg-white rounded-full hover:cursor-pointer'
            onClick={() => route.push(itemProfile.link)}
        >
            <div className='w-10 h-10 bg-secondary  rounded-xl flex items-center justify-center'>
                <Icono className='text-xl text-white' />
            </div>
            <h3 className='flex-grow'>{itemProfile.titulo}</h3>
            <MdOutlineKeyboardArrowRight className='mr-2 text-xl hover:cursor-pointer' />
        </div>
    )
}
