'use client'

import { Button, Checkbox, Divider, Radio, RadioGroup, Tab, Tabs } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import { horarioAtension, horasAtension } from '@/constants/horario-atencion'
import ItemHoraAtencion from '@/components/doctor/item-hora-atencion'

export default function itemPerfil() {
    const route = useRouter()
    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (value: string) => {
        setSelectedValue(value)
        // Do something with the selected value
    }

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric' })

    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen max-w-md mx-auto pb-[90px]'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Horario atención</h1>
            </div>
            <div className='m-5 space-y-4'>
                <p>Seleccioné las clinica que va atender</p>
                <RadioGroup value={selectedValue} onValueChange={handleChange}>
                    <Radio value='prepaga1'>Clínica 1</Radio>
                    <Radio value='prepaga2'>Clínica 2</Radio>
                    <Radio value='prepaga3'>Clínica 3</Radio>
                </RadioGroup>
                <p>Seleccióna los días disponibles</p>
                <div>
                    <div className='flex w-full flex-col'>
                        <Tabs aria-label='Options' color='secondary'>
                            {horarioAtension.map((item) => (
                                <Tab key={item.key} title={item.title}>
                                    <h2 className='uppercase'>
                                        {item.key} {today}
                                    </h2>
                                    <div className=''>
                                        {horasAtension.map((item) => (
                                            <ItemHoraAtencion horaAtencion={item} />
                                        ))}
                                    </div>
                                </Tab>
                            ))}
                        </Tabs>
                    </div>
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
