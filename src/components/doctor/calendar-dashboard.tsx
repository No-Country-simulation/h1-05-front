'use client'
import { Calendar, type CalendarDate } from '@nextui-org/react'
import { parseDate } from '@internationalized/date'
import { useState } from 'react'
export default function CalendarDashboard() {
    const [value, setValue] = useState(parseDate('2024-07-17'))

    const handleChangeCalendar = (value: CalendarDate) => {
        setValue(value)
    }

    return (
        <>
            <Calendar
                weekdayStyle='narrow'
                showMonthAndYearPickers={true}
                color='secondary'
                value={value}
                onChange={handleChangeCalendar}
            />
        </>
    )
}
