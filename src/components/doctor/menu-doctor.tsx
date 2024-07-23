'use client'

import { menuDoctor } from '@/constants/menus/doctor/doctor-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoVertical from '../logo-vertical'

export default function MenuDoctor() {
    const path = usePathname()
    return (
        <>
            {/* MENU MOVIL */}
            <div className='w-full bg-white py-4 fixed bottom-0 md:hidden h-fit z-20 flex flex-row justify-evenly shadow-purple-900 shadow-large'>
                {menuDoctor.map(({ name, link, Icon }) => {
                    let isActive
                    if (link === '/dashboard') {
                        isActive = path === link
                    } else {
                        isActive = path.startsWith(link)
                    }
                    const textColor = isActive ? 'text-purple-900' : 'text-gray-600'

                    return (
                        <Link
                            key={name}
                            href={link}
                            className={`flex flex-col gap-1 items-center hover:text-purple-600 hover:scale-110 transition-all ${textColor}`}
                        >
                            <Icon className='text-3xl' />
                            <span className='text-xs'>{name}</span>
                        </Link>
                    )
                })}
            </div>
            {/* MENU DESKTOP */}
            <div className='hidden md:flex flex-col justify-start bg-white'>
                <div className='flex flex-col items-center gap-3 sm:px-6 md:px-12 lg:px-20 py-3'>
                    <LogoVertical />
                </div>
                <div className='py-4 flex flex-col gap-10 sm:ml-4 md:ml-7 lg:ml-10 w-fit'>
                    {menuDoctor.map(({ name, link, Icon }) => {
                        let isActive
                        if (link === '/dashboard') {
                            isActive = path === link
                        } else {
                            isActive = path.startsWith(link)
                        }
                        const textColor = isActive ? 'text-purple-900' : 'text-gray-600'

                        return (
                            <Link
                                key={name}
                                href={link}
                                className={`flex flex-row sm:px-2 md:px-4 lg:px-6 rounded-md hover:text-purple-600 hover:bg-slate-500/10 hover:scale-110 gap-2 items-center transition-all ${textColor}`}
                            >
                                <Icon className='text-3xl' />
                                <span className='text-sm'>{name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
