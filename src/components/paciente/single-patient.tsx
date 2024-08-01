import { Paciente } from '@/interfaces/user.interface'
import { calculateAge } from '@/utils/calculateAge'
import { Button, Calendar, CalendarDate, Image, Tab, Tabs } from '@nextui-org/react'
import { useState } from 'react'
import { BiCalendarCheck } from 'react-icons/bi'
import { parseDate } from '@internationalized/date'
import { FaPhone } from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'
import { RiMapPin2Fill } from 'react-icons/ri'
import AddActividad from '../form-add-activity'
import { dateFormat } from '@/utils/dateFormat'
import CalendarActivities from '../doctor/calendar-activities'

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

    let color: string = 'bg-purple-300'
    if (patient.estadoDelPaciente === 'Donante') color = 'bg-green-300'
    if (patient.estadoDelPaciente === 'Trasplantado') color = 'bg-yellow-400'
    const edad = calculateAge(patient.fechaNacimiento)
    return (
        <>
            <div className='w-full sm:w-[90%] bg-white rounded-sm'>
                <div className={`w-full ${color} text-center py-1 rounded-sm font-black`}>
                    {patient.estadoDelPaciente}
                </div>
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
                    </div>
                </div>
            </div>
            <Tabs color='secondary' variant='bordered' className='mt-2'>
                <Tab key='cita' title='Agenda'>
                    <div className='flex flex-col md:flex-row gap-3 items-start'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Agregar un evento:</p>
                            <Calendar
                                weekdayStyle='narrow'
                                showMonthAndYearPickers={true}
                                color='secondary'
                                value={value}
                                onChange={handleChangeCalendar}
                            />
                            <AddActividad fecha={formatDate(date)} patient={patient} />
                        </div>
                        <CalendarActivities patient={patient} />
                    </div>
                </Tab>
                <Tab key='tratamiento' title='Ficha clínica'>
                    <div>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}
