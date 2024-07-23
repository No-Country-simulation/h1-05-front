'use client'
import HeaderDoctor from './doctor/header-doctor'
import CalendarActivities from './doctor/calendar-activities'

// Datos de prueba
import { eventos } from '@/constants/demo-events'

export default function DashboardUser() {
    return (
        <>
            <HeaderDoctor />
            <div className='max-w-7xl mx-auto'>
                <CalendarActivities eventos={eventos} />
            </div>
        </>
    )
}
