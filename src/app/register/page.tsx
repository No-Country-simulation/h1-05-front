import RegisterComponent from '@/components/form-register'
import { Image } from '@nextui-org/react'

export default function RegisterPage() {
    return (
        <div className='flex flex-col items-center justify-center p-6 mx-auto lg:py-0'>
            <div className='w-full mt-10 flex flex-col items-center gap-10'>
                <Image className='w-32 md:w-48 animate-latido' src='/logo/justina-corazon.svg' alt='Corazon' />
                <Image className='w-64 md:w-80 rounded-none' src='/logo/justina-texto.svg' alt='Texto justina.io' />
                <div className='w-full max-w-md bg-white rounded-lg border shadow-sm'>
                    <div className='p-7 space-y-5'>
                        <h2 className='text-2xl font-semibold'>Crea tu cuenta</h2>
                        <RegisterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}
