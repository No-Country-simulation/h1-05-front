'use client'
import Activity from './single-activity'
import { eventsUserStore } from '@/store/events-user'
import LoadingArray from './loading-array'
import { patientsStore } from '@/store/patients-store'

export default function CalendarActivities() {
    const { events, isLoading } = eventsUserStore()
    const { patient } = patientsStore()

    const filterEvents = events.filter((event) => {
        if (!patient) {
            return true
        }
        if (event.patient) {
            return Number(event.patient.id) === Number(patient.id)
        }
        return false
    })

    return (
        <div className='p-4 w-full'>
            <div>
                <h3 className='text-lg font-semibold mb-4'>
                    Eventos agendados {patient && `con ${patient.firstName}`}
                </h3>
                {isLoading ? (
                    <LoadingArray />
                ) : filterEvents.length === 0 && !isLoading ? (
                    <p className='text-sm font-semibold'>No tienes eventos agendados</p>
                ) : (
                    filterEvents.map((evento) => <Activity key={evento.id} actividad={evento} />)
                )}
            </div>
        </div>
    )
}
