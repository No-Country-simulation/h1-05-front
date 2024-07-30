'use client'
import { Evento } from '@/interfaces/entidades.interface'
import { eventsUserStore } from '@/store/events-user'
import { dateFormat } from '@/utils/dateFormat'
import { parseDate } from '@internationalized/date'

interface EventosGroup {
    pendientes: Evento[]
    atendidos: Evento[]
}
export default function HeaderTotals() {
    const { events } = eventsUserStore()
    const hoy = parseDate(new Date().toLocaleDateString('en-CA'))

    const eventosGroup = events.reduce(
        (acc, event) => {
            const { date } = dateFormat(event.startDatetime)
            const newValue = parseDate(date.toLocaleDateString('en-CA'))

            const comparativa = hoy.compare(newValue) // comparacion: si es 0 es del día actual, si es negativo es pasado y si es positivo es futuro
            if (comparativa < 0) {
                acc.pendientes.push(event)
            } else if (comparativa >= 0) {
                acc.atendidos.push(event)
            }
            return acc
        },
        { atendidos: [], pendientes: [] } as EventosGroup
    )

    return (
        <div className='w-full md:w-fit md:bg-transparent p-4 z-20'>
            <div className='flex gap-6 md:gap-2 justify-evenly'>
                <div className='text-center w-28 bg-yellow-400/80 rounded-small p-2 space-y-2'>
                    <p className='text-2xl font-bold w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-yellow-700'>
                        {eventosGroup.pendientes.length}
                    </p>
                    <p className='text-xs font-extrabold uppercase text-yellow-900'>Pendientes</p>
                </div>
                <div className='text-center w-28 bg-emerald-200/80 rounded-small p-2 space-y-2'>
                    <p className='text-2xl font-bold w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-emerald-700'>
                        {eventosGroup.atendidos.length}
                    </p>
                    <p className='text-xs font-extrabold uppercase text-emerald-900'>Atendidos</p>
                </div>
                <div className='text-center w-28 bg-fuchsia-200/80 rounded-small p-2 space-y-2'>
                    <p className='text-2xl font-bold w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-fuchsia-700'>
                        {events.length}
                    </p>
                    <p className='text-xs font-extrabold uppercase text-fuchsia-900'>Total</p>
                </div>
            </div>
        </div>
    )
}
