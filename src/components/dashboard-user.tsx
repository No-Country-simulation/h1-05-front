'use client'
import HeaderDoctor from './doctor/header-doctor'
import CalendarActivities from './doctor/calendar-activities'

// Datos de prueba
import { medico } from '@/constants/demo-medico'
import { eventos } from '@/constants/demo-events'

export default function DashboardUser() {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeaderDoctor medico={medico} />
            <CalendarActivities eventos={eventos} />
        </div>
    )
}
