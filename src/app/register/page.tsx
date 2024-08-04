'use client'
import RegisterMedic from '@/components/form-register'
import RegisterPatient from '@/components/form-register-patient'
import LogoVertical from '@/components/logo-vertical'
import { Button, Radio, RadioGroup } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

type Roles = 'MEDICO' | 'PACIENTE'
export default function RegisterPage() {
    const [role, setRole] = useState<Roles>('MEDICO')

    return (
        <div className='flex flex-col items-center justify-center p-6 mx-auto lg:py-0'>
            <div className='w-full mt-10 flex flex-col items-center gap-10'>
                <LogoVertical />
                <div className='w-full max-w-md'>
                    <div className='p-7 space-y-5'>
                        <h2 className='text-2xl font-semibold'>Crea tu cuenta</h2>
                        <RadioGroup
                            orientation='horizontal'
                            onValueChange={(value) => setRole(value as Roles)}
                            label='Selecciona tipo de cuenta:'
                            className='mb-4'
                            color='secondary'
                            defaultValue={role}
                        >
                            <Radio value='MEDICO'>Médico</Radio>
                            <Radio value='PACIENTE'>Paciente</Radio>
                        </RadioGroup>
                        {role === 'MEDICO' && <RegisterMedic />}
                        {role === 'PACIENTE' && <RegisterPatient />}
                        <Link href='/login'>
                            <Button color='warning' variant='ghost' className='w-full my-4'>
                                Volver al login
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
