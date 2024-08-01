'use client'

import ChatBot from '@/components/chatbot'
import CalendarActivities from '@/components/doctor/calendar-activities'
import SearchVideos from '@/components/search-tutovideos'
import { userStore } from '@/store/user-store'
import { dateFormat } from '@/utils/dateFormat'
import { Image } from '@nextui-org/react'

export default function DashboardPage() {
    const { user } = userStore()
    const { diaNombre, mesNombre, diaNumero } = dateFormat()
    return (
        <div className='pb-16 sm:pb-3'>
            <div className='relative header-doctor flex flex-col items-start justify-between shadow-md mb-6 text-white'>
                <div className='absolute inset-0 bg-purple-950/90 z-10'></div>
                <div className='flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4 z-20'>
                    <div>
                        <h1 className='text-3xl font-bold'>
                            Buen día, <br />
                            {user?.firstName} {user?.lastName}
                        </h1>
                        <p className='text-gray-200'>
                            Hoy, {diaNombre} {diaNumero} de {mesNombre}
                        </p>
                    </div>
                    <Image alt='Doctor' src={user?.photo} className='object-cover w-28 relative z-10' />
                </div>
                {/* <HeaderTotals /> */}
            </div>
            <div className='max-w-7xl mx-auto'>
                <CalendarActivities />
                <SearchVideos />
            </div>
        </div>
    )
}
