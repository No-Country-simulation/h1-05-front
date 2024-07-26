import CalendarActivities from '@/components/doctor/calendar-activities'
import HeaderDoctor from '@/components/doctor/header-doctor'

export default function DashboardPage() {
    return (
        <div className='pb-16 sm:pb-3'>
            <HeaderDoctor />
            <div className='max-w-7xl mx-auto'>
                <CalendarActivities />
            </div>
        </div>
    )
}
