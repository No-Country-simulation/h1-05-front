'use client'

import { Evento } from '@/interfaces/entidades.interface'
import { dateFormat } from '@/utils/dateFormat'

export default function HoraCalendario({ events }: { events: Evento[] }) {
    return events.map((evento) => {
        let bgColor = 'bg-default-800/80'
        if (evento.type === 'CITA') bgColor = 'bg-purple-800/80'
        if (evento.type === 'CONFERENCIA') bgColor = 'bg-orange-700/80'
        if (evento.type === 'REUNION') bgColor = 'bg-green-700/80'
        return (
            <div key={evento.startDatetime} className='flex flex-col gap-4 my-4'>
                <div className='flex flex-row gap-2 items-center justify-between'>
                    <div className='w-20 text-center bg-slate-500 px-3 py-1 rounded-large text-white'>
                        {dateFormat(evento.startDatetime).hora}
                    </div>
                    <div className='text-center w-full'>
                        <div className={`${bgColor} px-3 py-1 rounded-full text-white`}>
                            {evento.type === 'CITA' && (
                                <div className='flex flex-row items-center gap-2'>
                                    <span className='text-xs shadow-sm px-3 py-1 bg-slate-500 rounded-full'>Cita</span>
                                    <span className='text-lg'>{evento.description}</span>
                                </div>
                            )}
                            {evento.type === 'CONFERENCIA' && (
                                <div className='flex flex-row items-center gap-2'>
                                    <span className='text-xs shadow-sm px-3 py-1 bg-slate-500 rounded-full'>
                                        Conferencia
                                    </span>
                                    <span className='text-lg'>{evento.description}</span>
                                </div>
                            )}
                            {evento.type === 'REUNION' && (
                                <div className='flex flex-row items-center gap-2'>
                                    <span className='text-xs shadow-sm px-3 py-1 bg-slate-500 rounded-full'>
                                        Reunión
                                    </span>
                                    <span className='text-lg'>{evento.description}</span>
                                </div>
                            )}
                            {evento.type === 'OTRO' && (
                                <div className='flex flex-row items-center gap-2'>
                                    <span className='text-xs shadow-sm px-3 py-1 bg-slate-500 rounded-full'>
                                        Otro evento
                                    </span>
                                    <span className='text-lg'>{evento.description}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}
