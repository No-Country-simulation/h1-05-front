import { Paciente } from '@/interfaces/user.interface'
import { calculateAge } from '@/utils/calculateAge'
import { Button, Calendar, CalendarDate, Image } from '@nextui-org/react'
import { useState } from 'react'
import { BiCalendarCheck } from 'react-icons/bi'
import { parseDate } from '@internationalized/date'
import { FaPhone } from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'
import { RiMapPin2Fill } from 'react-icons/ri'
import AddActividad from '../form-add-activity'
import { dateFormat } from '@/utils/dateFormat'

export default function SinglePatient({ patient }: { patient: Paciente }) {
    if (!patient) return null

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-CA') // en-CA usa YYYY-MM-DD
    }

    const [value, setValue] = useState(parseDate(formatDate(new Date())))

    const handleChangeCalendar = (value: CalendarDate) => {
        setValue(value)
    }

    const timeZoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
    const { date } = dateFormat(value.toDate(timeZoneClient))

    let color: 'green' | 'purple' | 'yellow' = 'purple'
    if (patient.estadoDelPaciente === 'Donante') color = 'green'
    if (patient.estadoDelPaciente === 'Trasplantado') color = 'yellow'
    const edad = calculateAge(patient.fechaNacimiento)
    return (
        <>
            <div className='w-full sm:w-[90%] bg-white rounded-sm'>
                <div className={`w-full bg-${color}-400 text-center py-1 rounded-sm`}>{patient.estadoDelPaciente}</div>
                {/* <div className='grid grid-cols-[2fr_3fr] items-start justify-between '> */}
                <div className='flex flex-col md:flex-row gap-3 w-full text-center md:text-start justify-between items-center p-3'>
                    <Image src={patient.photo} alt='Doctor' className='object-cover w-40 relative' />
                    <div className='flex flex-col w-full justify-center gap-2'>
                        <div className='border-b-1 border-purple-600'>
                            <h1 className='text-xl font-bold text-purple-800'>
                                {patient.firstName} {patient.lastName}
                            </h1>
                            <p className='font-bold'>
                                {patient.organoEnfermo
                                    ? `Órgano requerido: ${patient.organoEnfermo}`
                                    : 'Transplante a definir'}
                            </p>
                            <div className='font-bold text-purple-800 flex justify-between'>
                                <p>DNI: {patient.nroDocumento}</p>
                                {edad ? <p>Edad: {edad}</p> : null}
                            </div>
                        </div>
                        <div className='flex flex-row flex-wrap gap-3'>
                            <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                                <FaDroplet className='text-sm text-red-700' />
                                <p>{patient.factorSanguineo}</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                                <GrMail className='text-sm text-blue-700' />
                                <p>{patient.email}</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                                <FaPhone className='text-sm text-yellow-700' />
                                <p>{patient.phone}</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 px-2 py-1 bg-violet-500/10 rounded-md'>
                                <RiMapPin2Fill className='text-sm text-green-700' />
                                {patient.city !== patient.province ? (
                                    <p>
                                        {patient.city} | {patient.province}
                                    </p>
                                ) : (
                                    <p>{patient.city}</p>
                                )}
                            </div>
                        </div>
                        <Button
                            color='secondary'
                            className='w-fit'
                            variant='ghost'
                            radius='sm'
                            startContent={<BiCalendarCheck className='text-2xl' />}
                        >
                            Agendar cita
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <Calendar
                    weekdayStyle='narrow'
                    showMonthAndYearPickers={true}
                    color='secondary'
                    value={value}
                    onChange={handleChangeCalendar}
                />
                <div className='min-w-80'>
                    <AddActividad fecha={formatDate(date)} patient={patient} />
                </div>
            </div>
        </>
    )
}
