import { Medico } from '@/interfaces/user.interface'
import { Image } from '@nextui-org/react'

import { IoMdSettings } from 'react-icons/io'

export default function HeaderDoctor({ medico }: { medico: Medico }) {
    console.log(medico)
    return (
        <div className='bg-[url("/img/perfil/background-header.jpeg")] bg-cover p-4'>
            <div className='flex flex-row-reverse mb-4'>
                <div className='w-11 h-11 bg-secondary flex justify-center items-center rounded-xl'>
                    <IoMdSettings color='white' className='w-5 h-5' />
                </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <Image src={medico.img} className='w-32 h-32'></Image>
                <h2 className='text-3xl'>{medico.name}</h2>
            </div>
        </div>
        // <div className='bg-[url("/img/samples/header-dashboard-doctor.jpg")] bg-cover flex flex-col md:flex-row items-center justify-between shadow-md rounded-b-lg mb-6 text-white'>
        //     <div className='relative bg-black bg-opacity-50 flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4'>
        //         <div className='absolute inset-0'></div>
        //         <div className='relative z-10'>
        //             <h1 className='text-3xl font-bold'>
        //                 Buen día, <br />
        //                 Dr. {medico.lastname}
        //             </h1>
        //             <p className='text-gray-200'>Hoy, {`${diaNombre} ${diaNumero} de ${mesNombre}`}</p>
        //         </div>
        //         <Image src={medico.img} alt='Doctor' className='object-cover w-28 relative z-10' />
        //     </div>
        //     <div className='w-full md:w-fit bg-black bg-opacity-50 p-4'>
        //         <h3 className='md:text-right'>Turnos:</h3>
        //         <div className='flex gap-6 justify-between'>
        //             <div className='text-center'>
        //                 <p className='text-lg font-semibold'>Pendientes</p>
        //                 <p className='text-2xl font-bold'>8</p>
        //             </div>
        //             <div className='text-center'>
        //                 <p className='text-lg font-semibold'>Atendidos</p>
        //                 <p className='text-2xl font-bold'>4</p>
        //             </div>
        //             <div className='text-center'>
        //                 <p className='text-lg font-semibold'>Total</p>
        //                 <p className='text-2xl font-bold'>12</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
