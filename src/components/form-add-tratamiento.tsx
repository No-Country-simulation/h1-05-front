import { Paciente } from '@/interfaces/user.interface'
import { userStore } from '@/store/user-store'
import { Button, DatePicker, Input, Tooltip } from '@nextui-org/react'
import { useState } from 'react'
import { MdAddBox, MdDelete } from 'react-icons/md'
import { toast } from 'sonner'
import { parseDate, today, getLocalTimeZone } from '@internationalized/date'
import Medicacion from './doctor/form-registrar-medicacion/medicamento'

type PostTratamiento = {
    description: string
    notes: string[]
    startDate: string
    endDate: string
    patientId: number
    doctorId: number
}

export default function AddTratamiento({ patient }: { patient: Paciente }) {
    const { user, token } = userStore()
    const [date, setDate] = useState({
        start: parseDate(today(getLocalTimeZone()).toString()),
        end: parseDate(today(getLocalTimeZone()).add({ months: 1 }).toString()),
    })
    const [listMedicine, setListMedicines] = useState<string[]>([])
    if (!user) return null
    const initialForm = {
        description: '',
        notes: [''],
        startDate: '',
        endDate: '',
        patientId: patient.id,
        doctorId: user.medicId ? user.medicId : 0,
    }
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<PostTratamiento>(initialForm)

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: name === 'patientId' || name === 'doctorId' ? Number(value) : value,
        })
    }

    const handleNoteChange = (index: number, value: string) => {
        const newNotes = [...form.notes]
        newNotes[index] = value
        setForm({ ...form, notes: newNotes })
    }

    const handleAddNote = () => {
        setForm({ ...form, notes: [...form.notes, ''] })
    }

    const handleRemoveNote = (index: number) => {
        const newNotes = form.notes.filter((_, i) => i !== index)
        setForm({ ...form, notes: newNotes })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const timeZoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
        const dataToSend = {
            description: form.description,
            notes: form.notes,
            patientId: patient.id,
            doctorId: user.medicId ? user.medicId : 0,
            startDate: date.start.toDate(timeZoneClient).toISOString(),
            endDate: date.end.toDate(timeZoneClient).toISOString(),
        }

        try {
            setLoading(true)
            console.log({ dataToSend, token })
            const url = process.env.NEXT_PUBLIC_URL_BACK
            const response = await fetch(`${url}/treatments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(dataToSend),
            })

            if (!response.ok) {
                throw new Error('Error en la creación del tratamiento')
            } else {
                const data = await response.json()
                console.log(data)
                setForm(initialForm)
                toast.success('Tratamiento creado exitosamente (aún no se muestra)')
            }
        } catch (error) {
            console.error(error)
            toast.error('Hubo un error al crear el tratamiento')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-sm space-y-3'>
            <div>
                <Input
                    color='secondary'
                    label='Descripción'
                    name='description'
                    value={form.description}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='flex gap-2'>
                <DatePicker
                    label='Inicio del tratamiento'
                    color='secondary'
                    minValue={parseDate('2000-01-01')}
                    showMonthAndYearPickers
                    value={date.start}
                    onChange={(startDate) => setDate({ ...date, start: startDate })}
                />
                <DatePicker
                    label='Término del tratamiento'
                    color='secondary'
                    minValue={date.start.add({ days: 1 })}
                    showMonthAndYearPickers
                    value={date.end}
                    onChange={(endDate) => setDate({ ...date, end: endDate })}
                />
            </div>
            <div className='space-y-2'>
                {form.notes.map((note, index) => (
                    <div key={index}>
                        <Input
                            color='secondary'
                            label={`Detalle o indicación (${index + 1})`}
                            type='text'
                            value={note}
                            onChange={(e) => handleNoteChange(index, e.target.value)}
                            endContent={
                                <div className='flex gap-1'>
                                    <Tooltip content='Eliminar detalle' placement='top-end' showArrow>
                                        <button onClick={() => handleRemoveNote(index)}>
                                            <MdDelete className='text-2xl text-red-600' />
                                        </button>
                                    </Tooltip>
                                    <Tooltip content='Agregar nuevo detalle' placement='top-end' showArrow>
                                        <button onClick={handleAddNote}>
                                            <MdAddBox className='text-2xl text-purple-600' />
                                        </button>
                                    </Tooltip>
                                </div>
                            }
                        />
                    </div>
                ))}
                {form.notes.length === 0 && (
                    <Button color='warning' onClick={handleAddNote}>
                        Agregar detalles
                    </Button>
                )}
            </div>
            <div>
                <Input
                    type='hidden'
                    label='ID del Paciente'
                    name='patientId'
                    value={form.patientId.toString()}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div>
                <Input
                    type='hidden'
                    label='ID del Doctor'
                    name='doctorId'
                    value={form.doctorId.toString()}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <Medicacion list={listMedicine} setList={setListMedicines} />

            {/* {listMedicine.map((medicina) => (
                <AddMedicacion key={medicina} medicationKey={medicina} />
            ))} */}

            <Button color='secondary' type='submit' isDisabled={loading} isLoading={loading}>
                Crear Tratamiento
            </Button>
        </form>
    )
}
