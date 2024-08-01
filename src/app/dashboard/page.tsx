import CalendarActivities from '@/components/doctor/calendar-activities'
import HeaderDoctor from '@/components/doctor/header-doctor'

export default function DashboardPage() {
    return (
        <>
            <HeaderDoctor />
            <div className='max-w-7xl mx-auto'>
                <CalendarActivities />
            </div>
        </>
    )
}
