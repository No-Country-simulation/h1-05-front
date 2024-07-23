'use client'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

export default async function MainTitle({ title }: { title: string }) {
    const route = useRouter()
    return (
        <div className='flex items-center justify-center'>
            <IoIosArrowBack className='text-[#9A41CE] flex-none hover:cursor-pointer' onClick={() => route.back()} />
            <h1 className='font-bold  flex-auto text-center'>{title}</h1>
        </div>
    )
}
