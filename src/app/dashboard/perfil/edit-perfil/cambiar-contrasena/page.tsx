'use client'

import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

import { ImEye } from 'react-icons/im'
import { PiEyeClosed } from 'react-icons/pi'
import { useState } from 'react'

export default function itemPerfil() {
    const route = useRouter()
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [showPass3, setShowPass3] = useState(false)
    return (
        <div className='bg-[url("/img/background.svg")] bg-cover p-4 min-h-screen'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack className='text-[#9A41CE] flex-none' onClick={() => route.back()} />
                <h1 className='font-bold  flex-auto text-center'>Dirección</h1>
            </div>
            <div className='m-5 space-y-4'>
                <Input
                    type={showPass1 ? 'text' : 'password'}
                    label='Contraseña actual'
                    color='secondary'
                    endContent={
                        <button className='focus:outline-none' type='button' onClick={() => setShowPass1(!showPass1)}>
                            {showPass1 ? (
                                <ImEye className='text-2xl text-purple-700 pointer-events-none' />
                            ) : (
                                <PiEyeClosed className='text-2xl text-purple-700 pointer-events-none' />
                            )}
                        </button>
                    }
                />
                <Input
                    type={showPass2 ? 'text' : 'password'}
                    label='Nueva contraseña'
                    color='secondary'
                    endContent={
                        <button className='focus:outline-none' type='button' onClick={() => setShowPass2(!showPass2)}>
                            {showPass2 ? (
                                <ImEye className='text-2xl text-purple-700 pointer-events-none' />
                            ) : (
                                <PiEyeClosed className='text-2xl text-purple-700 pointer-events-none' />
                            )}
                        </button>
                    }
                />
                <Input
                    type={showPass3 ? 'text' : 'password'}
                    label='Repetir contraseña'
                    color='secondary'
                    endContent={
                        <button className='focus:outline-none' type='button' onClick={() => setShowPass3(!showPass3)}>
                            {showPass3 ? (
                                <ImEye className='text-2xl text-purple-700 pointer-events-none' />
                            ) : (
                                <PiEyeClosed className='text-2xl text-purple-700 pointer-events-none' />
                            )}
                        </button>
                    }
                />
                <div className='text-center'>
                    <Button color='secondary' type='submit' className='w-full'>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}
