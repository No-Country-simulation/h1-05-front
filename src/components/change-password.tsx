import { Button, Input } from '@nextui-org/react'

export default function ChangePasword() {
    return (
        <div className='p-7 space-y-5'>
            <h2 className='text-2xl font-semibold'>Se ha verificado su cuenta</h2>
            <p>
                {' '}
                Ingrese su nueva contraseña. Por favor, asegúrese de que contenga al menos 8 caracteres, una letra mayúscula, una letra minúscula y un carácter
                especial.
            </p>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-5'>
                    <Input type='password' placeholder='Contraseña' color='secondary' autoComplete='off' />
                    <Input type='password' placeholder='Contraseña' color='secondary' autoComplete='off' />
                </div>

                <div className='flex flex-col gap-3'>
                    <Button color='secondary'>Modificar contraseña</Button>
                </div>
            </form>
        </div>
    )
}
