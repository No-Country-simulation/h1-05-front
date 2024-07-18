'use client'

import { Checkbox, Divider } from '@nextui-org/react'
import { HoraAtencion } from '@/interfaces/user.interface'

export default function itemHoraAtencion({ horaAtencion }: { horaAtencion: HoraAtencion }) {
    return (
        <div className='flex flex-col gap-4 my-4'>
            <div className='flex gap-4'>
                <div>{horaAtencion.hora}</div>
                <div className='grow text-center'>
                    <Divider className='my-2 bg-secondary' />
                    <Checkbox>Disponible</Checkbox>
                </div>
            </div>
        </div>
    )
}
