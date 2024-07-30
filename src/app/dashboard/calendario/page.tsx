import CalendarDashboard from '@/components/doctor/calendar-dashboard'
import { Divider } from '@nextui-org/react'

export default function CalendarPage() {
    return (
        <div className='px-4 pb-20 md:pb-2'>
            <p className='text-xl font-bold pt-3'>Calendario</p>
            <Divider className='my-3' />
            <CalendarDashboard />
        </div>
    )
}
