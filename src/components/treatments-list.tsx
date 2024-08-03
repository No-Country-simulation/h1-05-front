'use client'

import { medicamentos } from '@/constants/nomenclaturas/medicamentos'
import { treatmentStore } from '@/store/tratments-store'
import { userStore } from '@/store/user-store'
import { useEffect } from 'react'
import LoadingArray from './doctor/loading-array'
import { Image } from '@nextui-org/react'

export default function TreatmentsList({ patientId }: { patientId: number }) {
    const { treatments, getTreatments, isLoading } = treatmentStore()
    const { token } = userStore()
    useEffect(() => {
        if (token) getTreatments(token, patientId)
    }, [token])
    if (isLoading)
        return (
            <div className='max-w-[90%]'>
                <LoadingArray />
            </div>
        )
    return (
        <div className='max-w-[92%] mx-auto md:mx-0'>
            {treatments.map((treatment) => (
                <div className='border rounded-lg p-4 shadow-md mb-4 bg-white'>
                    <div className='flex items-center mb-4'>
                        <Image
                            src={treatment.patient.photo}
                            alt={`${treatment.patient.firstName} ${treatment.patient.lastName}`}
                            className='w-16 h-16 rounded-full mr-4 drop-shadow-lg'
                        />
                        <div>
                            <h2 className='text-xl font-semibold'>{`${treatment.patient.firstName} ${treatment.patient.lastName}`}</h2>
                            <p className='text-gray-600'>{treatment.patient.email}</p>
                            <p className='text-gray-600'>Tel: {treatment.patient.phone}</p>
                        </div>
                    </div>

                    <h3 className='text-lg font-bold mb-2'>{treatment.description}</h3>
                    <p className='text-gray-700 mb-2'>
                        <strong>Notas:</strong> {treatment.notes.join(', ')}
                    </p>
                    <p className='text-gray-700 mb-2'>
                        <strong>Fecha de inicio:</strong> {new Date(treatment.startDate).toLocaleDateString()}
                    </p>
                    <p className='text-gray-700 mb-2'>
                        <strong>Fecha de fin:</strong> {new Date(treatment.endDate).toLocaleDateString()}
                    </p>

                    {treatment.medications && treatment.medications.length > 0 && (
                        <div className='mb-2'>
                            <h4 className='font-semibold'>Medicamentos:</h4>
                            <ul className='list-disc list-inside'>
                                {treatment.medications.map((med) => {
                                    const findMedicament = medicamentos.find(
                                        (medicina) => medicina.clave_csf === med.medicationKey
                                    )
                                    if (findMedicament) {
                                        return (
                                            <li key={med.id}>
                                                <strong>
                                                    {findMedicament.nombre_comercial} ({findMedicament.principio_activo}
                                                    ):
                                                </strong>{' '}
                                                {med.notes.join(', ')}. Dosis: {med.dosage} | Frecuencia:{' '}
                                                {med.frequency}, Duración: {med.duration}
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={med.id}>
                                            <strong>Código: {med.medicationKey}:</strong> {med.notes.join(', ')}. Dosis:{' '}
                                            {med.dosage} | Frecuencia: {med.frequency} | Duración: {med.duration}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}

                    <div className='flex items-center mt-4'>
                        <img
                            src={treatment.doctor.photo}
                            alt={`${treatment.doctor.firstName} ${treatment.doctor.lastName}`}
                            className='w-10 h-10 rounded-full mr-3'
                        />
                        <div>
                            <p className='text-gray-800'>
                                <strong>Médico encargado:</strong>{' '}
                                {`${treatment.doctor.firstName} ${treatment.doctor.lastName}`}
                            </p>
                            <p className='text-gray-600'>{treatment.doctor.email}</p>
                            <p className='text-gray-600'>Tel: {treatment.doctor.phone}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
