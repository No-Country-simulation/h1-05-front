import CalendarDashboard from '@/components/doctor/calendar-dashboard'
import { Divider } from '@nextui-org/react'

export default function CalendarPage() {
    return (
        <div className='px-4'>
            <p className='text-xl font-bold pt-3'>Calendario</p>
            <Divider className='my-3' />
            <div className='p-4 flex justify-center items-center gap-2 bg-black/30 rounded-small mb-3'>
                <span className='text-lg font-semibold'>8</span>
                <span>Actividades agendadas</span>
            </div>
            <div className='flex justify-center'>
                <CalendarDashboard />
            </div>
        </div>
    )
}
