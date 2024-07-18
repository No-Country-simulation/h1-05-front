'use client'

import { Button, Input, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RangeCalendar } from '@nextui-org/react'
import { today, getLocalTimeZone } from '@internationalized/date'

export default function itemPerfil() {
    const route = useRouter()
    let [value, setValue] = useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
    })
    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen max-w-md mx-auto pb-[90px]'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack
                    className='text-[#9A41CE] flex-none hover:cursor-pointer'
                    onClick={() => route.back()}
                />
                <h1 className='font-bold  flex-auto text-center'>Licencia</h1>
            </div>
            <div className='m-5 space-y-4'>
                <p>Seleccione dias de licencia</p>
                <div className='w-full text-center'>
                    <RangeCalendar aria-label='Date (Controlled)' value={value} onChange={setValue} className='' />
                </div>

                <div className='text-center'>
                    <Button color='secondary' type='submit' className='w-full'>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}
