import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'

export default function SuccessPage() {
    return (
        <div className='flex flex-col items-center py-6'>
            <h2 className='font-bold text-2xl'>Registro realizado con éxito</h2>
            <p>Estaremos validando tu cuenta, te llegará un email cuando la validemos</p>
            <Image src='/img/ilustracion.png' alt='Imagen de registro exitoso' className='max-w-80' />
            <Link href={'/login'}>
                <Button color='secondary' className='px-20 my-3'>
                    Ir al login
                </Button>
            </Link>
        </div>
    )
}
