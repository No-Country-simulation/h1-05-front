'use client'
import Activity from './single-activity'
import { eventsUserStore } from '@/store/events-user'
import LoadingArray from './loading-array'

export default function CalendarActivities() {
    const { events, isLoading } = eventsUserStore()

    return (
        <div className='p-4'>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Tus eventos agendados</h3>
                {isLoading ? (
                    <LoadingArray />
                ) : events.length === 0 && !isLoading ? (
                    <p className='text-sm font-semibold'>No tienes eventos agendados</p>
                ) : (
                    events.map((evento) => <Activity key={evento.id} actividad={evento} />)
                )}
            </div>
        </div>
    )
}
