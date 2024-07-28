'use client'

import { userStore } from '@/store/user-store'
import { Image } from '@nextui-org/react'

export default function DashboardPage() {
    const { user } = userStore()
    console.log(user)
    return (
        <div className='pb-16 sm:pb-3'>
            <div className='relative header-doctor flex flex-col items-start justify-between shadow-md mb-6 text-white'>
                <div className='absolute inset-0 bg-purple-950/90 z-10'></div>
                <div className='flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4 z-20'>
                    <div>
                        <h1 className='text-3xl font-bold'>
                            Buen día, <br />
                            Dr. asdasdas
                        </h1>
                        <p className='text-gray-200'>Hoy, asasdas</p>
                    </div>
                    <Image alt='Doctor' className='object-cover w-28 relative z-10' />
                </div>
                {/* <HeaderTotals /> */}
            </div>
            <div className='max-w-7xl mx-auto'>Calendario</div>
        </div>
    )
}
