import { Input } from '@nextui-org/react'
import { useState } from 'react'
interface Form {
    medicationKey: string
    notes: string[]
    dosage: string
    frequency: string
    duration: string
    treatmentId?: number
}
import { medicamentos } from '@/constants/nomenclaturas/medicamentos'

export default function AddMedicacion({ medicationKey }: { medicationKey: string }) {
    const [form, setForm] = useState<Omit<Form, 'medicationKey'>>({
        notes: [],
        dosage: '',
        frequency: '',
        duration: '',
    })
    const medicamento = medicamentos.find((m) => m.clave_csf === medicationKey)
    if (!medicamento) return null
    return (
        <div className='bg-purple-100 rounded-lg p-2'>
            <p className='text-sm text-purple-900'>
                Información sobre {medicamento.nombre_comercial.toLowerCase()} (
                {medicamento.principio_activo.toLowerCase()}
                ):
            </p>
            <input type='hidden' value={medicationKey} />
            <label>
                Dosage:
                <input
                    type='text'
                    name='dosage'
                    value={form.dosage}
                    onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                />
            </label>
            <label>
                Frequency:
                <input
                    type='text'
                    name='frequency'
                    value={form.frequency}
                    onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                    className='border p-1'
                />
            </label>
            <label>
                Duration:
                <input
                    type='text'
                    name='duration'
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                    className='border p-1'
                />
            </label>
            <div>
                <label>Notes:</label>
                {form.notes.map((note, noteIndex) => (
                    <input
                        key={noteIndex}
                        type='text'
                        value={note}
                        onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                        className='border p-1 my-1'
                    />
                ))}
            </div>
        </div>
    )
}
