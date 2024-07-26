'use client'
import { dateFormat } from '@/utils/dateFormat'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Evento } from '@/interfaces/entidades.interface'
import Activity from './single-activity'
import { Suspense, useEffect, useState } from 'react'
import { userStore } from '@/store/user-store'
import { Skeleton } from '@nextui-org/react'
import { eventsUserStore } from '@/store/events-user'

export default function CalendarActivities() {
    const { events, isLoading } = eventsUserStore()
    const { diaNombre, diaNumero, mesNombre } = dateFormat()

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center mb-6 p-4'>
                <button className='text-gray-600 hover:text-gray-800'>
                    <GrFormPrevious className='text-xl' />
                </button>
                <h2 className='text-xl font-semibold'>{mesNombre} 2024</h2>
                <button className='text-gray-600 hover:text-gray-800'>
                    <GrFormNext className='text-xl' />
                </button>
            </div>
            <div className='grid grid-cols-7 gap-2 text-center mb-6'>
                <div className='text-xs text-default-600 cursor-auto'>DOM</div>
                <div className='text-xs text-default-600 cursor-auto'>LUN</div>
                <div className='text-xs text-default-600 cursor-auto'>MAR</div>
                <div className='text-xs text-default-600 cursor-auto'>MIE</div>
                <div className='text-xs text-default-600 cursor-auto'>JUE</div>
                <div className='text-xs text-default-600 cursor-auto'>VIE</div>
                <div className='text-xs text-default-600 cursor-auto'>SAB</div>
                <div className='text-default-500 hover:scale-125 cursor-pointer transition-all'>7</div>
                <div className='text-default-500 hover:scale-125 cursor-pointer transition-all'>8</div>
                <div className='text-default-500 hover:scale-125 cursor-pointer transition-all'>9</div>
                <div className='text-default-500 hover:scale-125 cursor-pointer transition-all'>10</div>
                <div className='text-red-600 font-bold hover:scale-125 cursor-pointer transition-all'>11</div>
                <div className='text-default-500 hover:scale-125 cursor-pointer transition-all'>12</div>
                <div className='text-default-500 hover:scale-125 cursor-pointer transition-all'>13</div>
            </div>

            <div>
                <h3 className='text-lg font-semibold mb-4'>Actividades</h3>
                {isLoading ? (
                    <Cargando />
                ) : events.length === 0 ? (
                    <p className='text-sm font-semibold'>
                        No tienes eventos agendados, ve al calendario para crear el primero!
                    </p>
                ) : (
                    events.map((evento) => <Activity key={evento.id} actividad={evento} />)
                )}
            </div>
        </div>
    )
}

function Cargando() {
    return (
        <div className='space-y-3'>
            <div className='w-full flex items-center gap-3 rounded-md bg-slate-300 py-4 px-6'>
                <div>
                    <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
            <div className='w-full flex items-center gap-3 rounded-md bg-slate-300 py-4 px-6 opacity-40'>
                <div>
                    <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
        </div>
    )
}
