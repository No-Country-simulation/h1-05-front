'use client'
import { Calendar, type CalendarDate } from '@nextui-org/react'
import { parseDate } from '@internationalized/date'
import { useState } from 'react'
export default function CalendarDashboard() {
    const formatDate = (date: Date) => {
        // en-CA usa YYYY-MM-DD
        return date.toLocaleDateString('en-CA')
    }

    const [value, setValue] = useState(parseDate(formatDate(new Date())))

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
