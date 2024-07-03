import { Button, Input } from '@nextui-org/react'
import { FiLogIn } from 'react-icons/fi'
import { RiUserAddLine } from 'react-icons/ri'

export default function LoginComponent() {
    return (
        <form className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Ingresá a Justina.io</h2>
            <div className='flex flex-col gap-5'>
                <Input type='email' placeholder='Ingrese email' color='secondary' autoComplete='off' />
                <Input type='password' placeholder='Ingrese contraseña' color='secondary' autoComplete='off' />
            </div>

            <div className='flex justify-end text-purple-800'>Olvidé mi contraseña</div>

            <div className='flex flex-col gap-3'>
                <Button type='submit' color='secondary'>
                    <FiLogIn /> Ingresar
                </Button>
                <Button color='default'>
                    <RiUserAddLine /> Registrarse
                </Button>
            </div>
        </form>
    )
}
