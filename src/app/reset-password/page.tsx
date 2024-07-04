

import { Button, Input } from '@nextui-org/react'

export default function InitiateResetPassword() {
    return (
        <div className='flex flex-col items-center justify-center p-6 mx-auto lg:py-0'>
            <div className='w-full mt-10 flex flex-col items-center gap-10'>
                <div className='grid gap-5 grid-cols-1 mb-5'>
                    <h1>Recuperación de contraseña</h1>
                    <p>Ingrese el email del usuario que quiera recuperar y presione el botón Recuperar Contraseña</p>
                    <Input name='email' label='E-mail' />
                    <Button type='submit' >Recuperar contraseña</Button>
                    <Button>Volver</Button>
                </div>
            </div>
        </div>
    )
}
