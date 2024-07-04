
import { Button, Image, Input } from '@nextui-org/react'


export default function LoginPage() {
    return (
        <div className='flex flex-col items-center justify-center p-6 mx-auto lg:py-0'>
            <div className='w-full mt-10 flex flex-col items-center gap-10'>
                <Image className='w-32 md:w-48 animate-latido' src='/logo/justina-corazon.svg' alt='Corazon' />
                <Image className='w-64 md:w-80 rounded-none' src='/logo/justina-texto.svg' alt='Texto justina.io' />
                <div className='w-full max-w-md bg-white rounded-lg border shadow-sm'>
                    <div className='p-7 space-y-5'>
                        <h2 className='text-2xl font-semibold'>Se ha verificado su cuenta</h2>
                        <p> Ingrese su nueva contraseña. Por favor, asegúrese de que contenga al menos 8 caracteres, una letra mayúscula, una letra minúscula y un carácter especial.</p>
                        <form className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-5'>
                                <Input type='password' placeholder='Contraseña' color='secondary' autoComplete='off' />
                                <Input type='password' placeholder='Contraseña' color='secondary' autoComplete='off' />
                            </div>

                            <div className='flex flex-col gap-3'>
                                <Button color='secondary'>
                                    Modificar contraseña
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
