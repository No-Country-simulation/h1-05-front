'use client'
import { menuDoctor } from '@/constants/doctor-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuDoctor() {
    const path = usePathname()
    return (
        <div className='w-full bg-white py-4 fixed bottom-0 z-20 flex flex-row justify-evenly shadow-purple-900 shadow-large'>
            {menuDoctor.map(({ name, link, Icon }) => {
                const textColor = path === link ? 'text-purple-900' : 'text-gray-900'
                return (
                    <Link key={name} href={link} className={`flex flex-col gap-1 items-center ${textColor}`}>
                        <Icon className='text-3xl' />
                        <span className='text-xs'>{name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
