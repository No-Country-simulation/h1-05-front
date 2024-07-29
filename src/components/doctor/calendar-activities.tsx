'use client'
import Activity from './single-activity'
import { Skeleton } from '@nextui-org/react'
import { eventsUserStore } from '@/store/events-user'

export default function CalendarActivities() {
    const { events, isLoading } = eventsUserStore()

    return (
        <div className='p-4'>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Actividades</h3>
                {isLoading ? (
                    <Cargando />
                ) : events.length === 0 && !isLoading ? (
                    <p className='text-sm font-semibold'>
                        No tienes eventos agendados, ve al calendario para crear el primero!
                    </p>
                ) : (
                    events.map((evento) => <Activity key={evento.id} actividad={evento} />)
                )}
            </div>
        </div>
    )
}

function Cargando() {
    return (
        <div className='space-y-3'>
            <div className='w-full flex items-center gap-3 rounded-md bg-slate-300 py-4 px-6'>
                <div>
                    <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
            <div className='w-full flex items-center gap-3 rounded-md bg-slate-300 py-4 px-6 opacity-40'>
                <div>
                    <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
        </div>
    )
}
