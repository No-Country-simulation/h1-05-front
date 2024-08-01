import { Evento } from '@/interfaces/entidades.interface'
import { dateFormat } from '@/utils/dateFormat'
import { Image } from '@nextui-org/react'

export default function Activity({ actividad }: { actividad: Evento }) {
    const { hora, diaNombre, diaNumero, mesNombre } = dateFormat(actividad.startDatetime)
    const tipo =
        actividad.type === 'REUNION'
            ? 'border-purple-600 bg-purple-50'
            : actividad.type === 'CITA'
            ? 'border-green-600 bg-green-50'
            : 'border-red-600 bg-red-50'

    return (
        <div className={`mb-4 p-4 border-l-4 ${tipo} rounded-lg flex items-center`}>
            {/* <Image src='/img/samples/doctor.png' alt='Jorge Perez' className='w-12 h-12 rounded-full mr-4' /> */}
            <div className='flex-1'>
                <p className='font-semibold text-sm md:text-base'>
                    {actividad.type}: {actividad.place}
                </p>
                <p className='text-sm text-gray-600'>{actividad.description}</p>
            </div>
            <div className='text-right'>
                <p suppressHydrationWarning className='text-xs font-semibold text-purple-700 md:text-sm'>
                    {diaNombre} {diaNumero} de {mesNombre} a las {hora}hrs
                </p>
                {actividad.patient && (
                    <p className='text-sm font-semibold text-purple-500 md:text-base'>
                        Paciente: {actividad.patient.firstName} {actividad.patient.lastName}
                    </p>
                )}
            </div>
        </div>
    )
}
