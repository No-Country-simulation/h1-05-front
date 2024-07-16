'use client'

import { ItemProfile } from '@/interfaces/user.interface'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function itemPerfil({ itemProfile }: { itemProfile: ItemProfile }) {
    const route = useRouter()
    return (
        <div className='flex flex-row items-center gap-4'>
            <div className='w-[40px] h-[40px] bg-secondary  rounded-xl flex items-center justify-center'>
                <Image src={itemProfile.icono} alt='icon' className='' />
            </div>
            <h3 className='flex-grow'>{itemProfile.titulo}</h3>
            <MdOutlineKeyboardArrowRight onClick={() => route.push(itemProfile.link)} />
        </div>
    )
}
