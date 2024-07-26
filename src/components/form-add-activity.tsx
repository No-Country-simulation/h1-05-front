'use client'
import { Button, DateInput, Input, Select, Selection, SelectItem, TimeInput, TimeInputValue } from '@nextui-org/react'
import { parseDate, parseAbsoluteToLocal } from '@internationalized/date'
import { FormEvent, useEffect, useState } from 'react'
import { userStore } from '@/store/user-store'
import { eventsUserStore } from '@/store/events-user'
import { toast } from 'sonner'

const tiposEventos = ['REUNION', 'CONFERENCIA', 'CITA', 'OTRO']

export default function AddActividad({ fecha }: { fecha: string }) {
    const { getEvents } = eventsUserStore()
    const { token } = userStore()
    const [inputForms, setInputs] = useState({
        description: '',
        place: '',
        type: tiposEventos[0],
    })
    const [loading, setLoading] = useState(false)
    const timeNow = parseAbsoluteToLocal(new Date(fecha).toISOString())
    let [time, setTime] = useState<TimeInputValue>(timeNow)
    const dateCalendar = parseDate(fecha)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        const horaExtra = time.hour === 23 ? 0 : time.hour + 1
        const startDateTimeString = `${dateCalendar}T${String(time.hour).padStart(2, '0')}:${String(
            time.minute
        ).padStart(2, '0')}:00`
        const endDateTimeString = `${dateCalendar}T${String(horaExtra).padStart(2, '0')}:${String(time.minute).padStart(
            2,
            '0'
        )}:00`
        const startDatetime = new Date(startDateTimeString).toISOString()
        const endDatetime = new Date(endDateTimeString).toISOString()
        try {
            if (!token) throw new Error('No hay token para crear evento')
            const dataToSendBackend = {
                ...inputForms,
                startDatetime,
                endDatetime,
                token,
            }
            console.log({ dataToSendBackend })
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK}/events`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...dataToSendBackend }),
            })
            console.log(res)
            if (res.ok) {
                getEvents(token)
            } else {
                toast.error('No se pudo crear el evento', { position: 'top-center' })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSelectionChange = (keys: Selection) => {
        const type = Array.from(keys)[0] as string
        setInputs({ ...inputForms, type })
    }

    return (
        <form className='space-y-3' onSubmit={handleSubmit}>
            {/* <h3 className='text-xl font-semibold text-slate-700 -mb-3 pl-3'>Agregar actividad</h3> */}
            <Select
                label='Seleccione tipo de evento'
                defaultSelectedKeys={[tiposEventos[0]]}
                onSelectionChange={handleSelectionChange}
                isRequired
            >
                {tiposEventos.map((tipo) => (
                    <SelectItem key={tipo}>{tipo}</SelectItem>
                ))}
            </Select>
            <div className='flex flex-row gap-2'>
                <DateInput isRequired label='Fecha del evento' value={dateCalendar} />
                <TimeInput isRequired label='Hora del evento' hideTimeZone value={time} onChange={setTime} />
            </div>
            <Input
                label='Descripción'
                value={inputForms.description}
                onChange={(e) => setInputs({ ...inputForms, description: e.target.value })}
                minLength={10}
                isRequired
            />
            <Input
                label='Lugar'
                value={inputForms.place}
                onChange={(e) => setInputs({ ...inputForms, place: e.target.value })}
                minLength={5}
                isRequired
            />
            <Button color='warning' type='submit' isDisabled={loading} isLoading={loading}>
                Crear nueva actividad
            </Button>
        </form>
    )
}
