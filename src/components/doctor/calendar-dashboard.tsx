'use client'
import { Calendar, type CalendarDate } from '@nextui-org/react'
import { parseDate } from '@internationalized/date'
import { useState } from 'react'
import HoraCalendario from './item-hora-calendario'
import { dateFormat } from '@/utils/dateFormat'
import { eventsUserStore } from '@/store/events-user'
import AddActividad from '../form-add-activity'

export default function CalendarDashboard() {
    const { events } = eventsUserStore()
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-CA') // en-CA usa YYYY-MM-DD
    }

    const [value, setValue] = useState(parseDate(formatDate(new Date())))

    const handleChangeCalendar = (value: CalendarDate) => {
        setValue(value)
    }

    const filterEvents = events.filter((event) => {
        const { date } = dateFormat(event.startDatetime)
        const newValue = parseDate(formatDate(date))
        const comparativa = newValue.compare(value) // comparacion: si es 0 es del día actual, si es negativo es pasado y si es positivo es futuro
        return comparativa === 0
    })

    const timeZoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
    const { diaNombre, diaNumero, mesNombre, date } = dateFormat(value.toDate(timeZoneClient))
    return (
        <>
            {filterEvents.length === 0 && (
                <div className='py-3 flex justify-center items-center gap-2 bg-black/10 rounded-small mb-3'>
                    <span className='font-bold'>Nada agendado para este día</span>
                </div>
            )}
            {filterEvents.length === 1 && (
                <div className='py-2 flex justify-center items-center gap-2 bg-black/10 rounded-small mb-3'>
                    <span className='text-lg font-semibold bg-white w-8 h-8 flex justify-center items-center rounded-full'>
                        {filterEvents.length}
                    </span>
                    <span className='font-bold'>Actividad agendada</span>
                </div>
            )}
            {filterEvents.length > 1 && (
                <div className='py-2 flex justify-center items-center gap-2 bg-black/10 rounded-small mb-3'>
                    <span className='text-lg font-semibold bg-white w-8 h-8 flex justify-center items-center rounded-full'>
                        {filterEvents.length}
                    </span>
                    <span className='font-bold'>Actividades agendadas</span>
                </div>
            )}
            <div className='flex flex-col sm:flex-row gap-3 items-center justify-center'>
                <Calendar
                    weekdayStyle='narrow'
                    showMonthAndYearPickers={true}
                    color='secondary'
                    value={value}
                    onChange={handleChangeCalendar}
                />
                <div className='min-w-80'>
                    <AddActividad fecha={formatDate(date)} />
                </div>
            </div>
            <div className='mt-3'>
                <h3 className='text-xl text-purple-900'>
                    {diaNombre} {diaNumero} de {mesNombre}
                </h3>
                <HoraCalendario events={filterEvents} />
            </div>
        </>
    )
}
