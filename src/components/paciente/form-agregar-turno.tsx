'use client'
import {
    Autocomplete,
    AutocompleteItem,
    Calendar,
    DateInput,
    TimeInput,
    type CalendarDate,
    TimeInputValue,
    Button,
} from '@nextui-org/react'
import { parseDate, parseAbsoluteToLocal } from '@internationalized/date'
import { useState, Key } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { IoSearch } from 'react-icons/io5'
import { DemoMedicosDisponibles } from '@/constants/demo-medicos-disponibles-para-turnos'
import { dateFormat } from '@/utils/dateFormat'

export default function formAgregarTurno() {
    const route = useRouter()
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-CA') // en-CA usa YYYY-MM-DD
    }

    const [value, setValue] = useState(parseDate(formatDate(new Date())))
    const [doctorSearched, setDoctorSearched] = useState('')

    //fecha
    const timeZoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
    const { diaNombre, diaNumero, mesNombre, date } = dateFormat(value.toDate(timeZoneClient))
    const dateCalendar = parseDate(formatDate(date))
    //hora
    const timeNow = parseAbsoluteToLocal(new Date(formatDate(date)).toISOString())
    let [time, setTime] = useState<TimeInputValue>(timeNow)
    //filtrar al doctor buscado en DemoMedicosDisponibles
    const medicosDisponibles = DemoMedicosDisponibles.filter(
        (medico) =>
            medico.firstName.toLowerCase().includes(doctorSearched.toLowerCase()) ||
            medico.lastname.toLowerCase().includes(doctorSearched.toLowerCase())
    )

    const handleChangeCalendar = (value: CalendarDate) => {
        setValue(value)
    }

    const handleInputChange = (value: string) => {
        console.log(value)
        if (value) {
            setDoctorSearched(value)
        }
    }

    const handleAutocomplete = (input: Key | null) => {
        console.log(input)
        if (input) {
            const findDoctor = medicosDisponibles.find(
                (medico) => medico.firstName === input || medico.lastname === input
            )
            console.log(findDoctor)
        }
    }

    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack
                    className='text-[#9A41CE] flex-none hover:cursor-pointer'
                    onClick={() => route.back()}
                />
                <h1 className='font-bold  flex-auto text-center'>Agregar turno</h1>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <Calendar
                    weekdayStyle='narrow'
                    showMonthAndYearPickers={true}
                    color='secondary'
                    value={value}
                    onChange={handleChangeCalendar}
                />
                <div className='space-y-4'>
                    <Autocomplete
                        label='Buscar doctor / especialidad'
                        defaultItems={medicosDisponibles}
                        className='max-w-xm w-full'
                        color='secondary'
                        startContent={<IoSearch />}
                        onInputChange={handleInputChange}
                        onSelectionChange={handleAutocomplete}
                    >
                        {(medico) => (
                            <AutocompleteItem key={medico.id} value={medico.firstName + ' ' + medico.lastname}>
                                {medico.firstName + ' ' + medico.lastname}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                    <div className='flex '>
                        <DateInput isRequired label='Fecha de turno' value={dateCalendar} />
                        <TimeInput isRequired label='Hora del turno' hideTimeZone value={time} onChange={setTime} />
                    </div>
                    <div className='text-right'>
                        <Button color='secondary'>Crear turno</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
