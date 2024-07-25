'use client'
import { dateFormat } from '@/utils/dateFormat'
import { Image } from '@nextui-org/react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { RxCalendar } from 'react-icons/rx'
import { Evento } from '@/interfaces/entidades.interface'
import Activity from './single-activity'
import { useEffect, useState } from 'react'
import { userStore } from '@/store/user-store'

export default function CalendarActivities() {
    const [events, setEvents] = useState<Evento[]>([])
    const { diaNombre, diaNumero, mesNombre } = dateFormat()
    const { user, token, loadingStore } = userStore()

    useEffect(() => {
        const getEvents = async (token: string) => {
            const url = process.env.NEXT_PUBLIC_URL_BACK
            const res = await fetch(`${url}/events`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if (res.ok) {
                const data: Evento[] = await res.json()
                console.log(data)
                setEvents(data)
            }
        }
        if (!loadingStore && token) {
            getEvents(token)
        }
    }, [loadingStore])
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
                {events.map((evento) => (
                    <Activity key={evento.id} actividad={evento} />
                ))}
            </div>
        </div>
    )
}
