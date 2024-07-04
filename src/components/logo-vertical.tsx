import { Image } from '@nextui-org/react'

export default function LogoVertical() {
    return (
        <>
            <Image className='w-32 md:w-48 animate-latido' src='/logo/justina-corazon.svg' alt='Corazon' />
            <Image className='w-64 md:w-80 rounded-none drop-shadow-lg hover:scale-110 transition-all' src='/logo/justina-texto.svg' alt='Texto justina.io' />
        </>
    )
}
