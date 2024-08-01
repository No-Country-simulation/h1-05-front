'use client'
import { Button, DateInput, Input, Select, Selection, SelectItem, TimeInput, TimeInputValue } from '@nextui-org/react'
import { parseDate, parseAbsoluteToLocal } from '@internationalized/date'
import { FormEvent, useEffect, useState } from 'react'
import { userStore } from '@/store/user-store'
import { eventsUserStore } from '@/store/events-user'
import { toast } from 'sonner'
import { Paciente } from '@/interfaces/user.interface'

const tiposEventos = ['REUNION', 'CONFERENCIA', 'CITA', 'OTRO']

export default function AddActividad({ fecha, patient }: { fecha: string; patient?: Paciente }) {
    const [pacientes, setPacientes] = useState<Paciente[]>([])
    const { getEvents } = eventsUserStore()
    const { token } = userStore()
    const { user } = userStore()
    const [inputForms, setInputs] = useState({
        description: '',
        place: '',
        type: tiposEventos[0],
        patientId: null as null | number,
    })
    const [loading, setLoading] = useState(false)
    const timeNow = parseAbsoluteToLocal(new Date(fecha).toISOString())
    let [time, setTime] = useState<TimeInputValue>(timeNow)
    const dateCalendar = parseDate(fecha)

    useEffect(() => {
        const loadMedicos = async (token: string) => {
            interface ResponsePatients {
                page: number
                size: number
                total: number
                pages: number
                items: Paciente[]
            }

            const url = process.env.NEXT_PUBLIC_URL_BACK
            const res = await fetch(`${url}/patients?page=1&size=20&doctorId=0`, {
                headers: {
                    accept: '*/*',
                    Authorization: `Bearer ${token}`,
                },
            })

            const data: ResponsePatients = await res.json()
            setPacientes(data.items)
        }
        if (token) loadMedicos(token)
    }, [token])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        try {
            if (inputForms.description === '' || inputForms.place === '') {
                return toast.error('Es requerido ingresar descripción y lugar', { position: 'top-center' })
            }
            const horaExtra = time.hour === 23 ? 0 : time.hour + 1
            const startDateTimeString = `${dateCalendar}T${String(time.hour).padStart(2, '0')}:${String(
                time.minute
            ).padStart(2, '0')}:00`
            const endDateTimeString = `${dateCalendar}T${String(horaExtra).padStart(2, '0')}:${String(
                time.minute
            ).padStart(2, '0')}:00`
            const startDatetime = new Date(startDateTimeString).toISOString()
            const endDatetime = new Date(endDateTimeString).toISOString()

            if (!token) throw new Error('No hay token para crear evento')

            const dataToSendBackend = {
                ...inputForms,
                startDatetime,
                endDatetime,
                patientId: !patient ? inputForms.patientId : patient.id,
                doctorId: user?.medicId,
            }
            console.log({ dataEnviadaAlBack: dataToSendBackend })
            console.log({ token })

            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK}/events`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...dataToSendBackend,
                }),
            })
            const data = await res.json()
            console.log({ respuestaBack: data })
            if (res.ok) {
                toast.success('Agendado exitosamente, actualizando calendario...', { position: 'top-center' })
                getEvents(token)
            } else {
                if (data.message) {
                    toast.error(data.message, { position: 'top-center' })
                } else {
                    toast.error('No se pudo crear el evento', { position: 'top-center' })
                }
            }
        } catch (error) {
            console.error(error)
            toast.error('No se pudo crear el evento, ver consola', { position: 'top-center' })
        } finally {
            setLoading(false)
            setInputs({
                description: '',
                place: '',
                patientId: 0,
                type: tiposEventos[0],
            })
        }
    }

    const handleSelectionEventTypes = (keys: Selection) => {
        const type = Array.from(keys)[0].toString()
        setInputs({ ...inputForms, type })
    }

    const handleSelectionPacientes = (keys: Selection) => {
        const pacienteId = Array.from(keys)[0]
        const patientId = pacienteId ? Number(pacienteId) : null
        setInputs({ ...inputForms, patientId })
    }

    return (
        <form className='space-y-3' onSubmit={handleSubmit}>
            {/* <h3 className='text-xl font-semibold text-slate-700 -mb-3 pl-3'>Agregar actividad</h3> */}
            <Select
                label='Seleccione tipo de evento'
                defaultSelectedKeys={[tiposEventos[0]]}
                onSelectionChange={handleSelectionEventTypes}
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
            {pacientes.length > 0 && !patient && (
                <Select label='Elija un usuario (opcional)' onSelectionChange={handleSelectionPacientes}>
                    {pacientes.map((paciente) => (
                        <SelectItem key={paciente.id}>{`${paciente.firstName} ${paciente.lastName}`}</SelectItem>
                    ))}
                </Select>
            )}

            <Button color='warning' type='submit' isDisabled={loading} isLoading={loading}>
                Crear nueva actividad
            </Button>
        </form>
    )
}
