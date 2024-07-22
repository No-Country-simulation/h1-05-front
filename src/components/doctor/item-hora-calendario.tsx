'use client'

import { dateFormat } from '@/utils/dateFormat'

interface Evento {
    id: number
    type: 'REUNION' | 'CONFERENCIA' | 'CITA' | 'OTRO'
    description: string
    startDatetime: Date
    endDateTime: Date
    place: string
}

export default function HoraCalendario({ evento }: { evento: Evento }) {
    let bgColor = 'bg-default-800/80'
    if (evento.type === 'CITA') bgColor = 'bg-purple-800/80'
    if (evento.type === 'CONFERENCIA') bgColor = 'bg-orange-700/80'
    if (evento.type === 'REUNION') bgColor = 'bg-green-700/80'

    return (
        <div className='flex flex-col gap-4 my-4'>
            <div className='flex flex-row gap-2 items-center justify-between'>
                <div className='w-20 text-center bg-slate-500 px-3 py-1 rounded-large text-white'>
                    {dateFormat(evento.startDatetime).hora}
                </div>
                <div className='text-center w-full'>
                    <div className={`${bgColor} px-3 py-1 rounded-large text-white`}>
                        {evento.type === 'CITA' && <span className='text-sm'>Cita {evento.description}</span>}
                        {evento.type === 'CONFERENCIA' && (
                            <span className='text-sm'>Conferencia: {evento.description}</span>
                        )}
                        {evento.type === 'REUNION' && <span className='text-sm'>Reunión: {evento.description}</span>}
                        {evento.type === 'OTRO' && <span className='text-sm'>{evento.description}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
