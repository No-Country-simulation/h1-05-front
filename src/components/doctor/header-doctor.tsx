import { Medico } from '@/interfaces/user.interface'
import { dateFormat } from '@/utils/dateFormat'
import { Image } from '@nextui-org/react'

export default function HeaderDoctor({ medico }: { medico: Medico }) {
    const { diaNombre, diaNumero, mesNombre } = dateFormat()
    return (
        <div className='relative header-doctor flex flex-col md:flex-row items-center justify-between shadow-md mb-6 text-white'>
            <div className='absolute inset-0 bg-black/60 z-10'></div>
            <div className='flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4 z-20'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        Buen día, <br />
                        Dr. {medico.lastname}
                    </h1>
                    <p className='text-gray-200'>Hoy, {`${diaNombre} ${diaNumero} de ${mesNombre}`}</p>
                </div>
                <Image src={medico.img} alt='Doctor' className='object-cover w-28 relative z-10' />
            </div>
            <div className='w-full md:w-fit md:bg-transparent p-4 z-20'>
                <div className='flex gap-6 md:gap-2 justify-evenly'>
                    <div className='text-center w-28 bg-purple-900/60 rounded-full p-2'>
                        <p className='text-xs font-semibold uppercase'>Pendientes</p>
                        <p className='text-2xl font-bold'>8</p>
                    </div>
                    <div className='text-center w-28 bg-purple-900/60 rounded-full p-2'>
                        <p className='text-xs font-semibold uppercase'>Atendidos</p>
                        <p className='text-2xl font-bold'>4</p>
                    </div>
                    <div className='text-center w-28 bg-purple-900/60 rounded-full p-2'>
                        <p className='text-xs font-semibold uppercase'>Total</p>
                        <p className='text-2xl font-bold'>12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
