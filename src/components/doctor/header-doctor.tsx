import { Medico } from '@/interfaces/user.interface'
import { dateFormat } from '@/utils/dateFormat'
import { Image } from '@nextui-org/react'

export default function HeaderDoctor({ medico }: { medico: Medico }) {
    const { diaNombre, diaNumero, mesNombre } = dateFormat()
    return (
        <div className='bg-[url("/img/samples/header-dashboard-doctor.jpg")] bg-cover flex flex-col md:flex-row items-center justify-between shadow-md rounded-b-lg mb-6 text-white'>
            <div className='relative bg-black bg-opacity-50 flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4'>
                <div className='absolute inset-0'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl font-bold'>
                        Buen día, <br />
                        Dr. {medico.lastname}
                    </h1>
                    <p className='text-gray-200'>Hoy, {`${diaNombre} ${diaNumero} de ${mesNombre}`}</p>
                </div>
                <Image src={medico.img} alt='Doctor' className='object-cover w-28 relative z-10' />
            </div>
            <div className='w-full md:w-fit bg-black/50 md:bg-transparent p-4'>
                <h3 className='w-fit bg-black/70 rounded-full px-2 mx-auto mr-auto md:mr-0 md:ml-auto'>Turnos:</h3>
                <div className='flex gap-6 md:gap-2 justify-evenly'>
                    <div className='text-center bg-black/50 rounded-md p-2'>
                        <p className='text-lg font-semibold'>Pendientes</p>
                        <p className='text-2xl font-bold'>8</p>
                    </div>
                    <div className='text-center bg-black/50 rounded-md p-2'>
                        <p className='text-lg font-semibold'>Atendidos</p>
                        <p className='text-2xl font-bold'>4</p>
                    </div>
                    <div className='text-center bg-black/50 rounded-md p-2'>
                        <p className='text-lg font-semibold'>Total</p>
                        <p className='text-2xl font-bold'>12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
