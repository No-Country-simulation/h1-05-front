import { Medico } from '@/interfaces/user.interface'
import { userStore } from '@/store/user-store'
import { dateFormat } from '@/utils/dateFormat'
import { Image } from '@nextui-org/react'

export default function HeaderDoctor() {
    const { user } = userStore()
    const { diaNombre, diaNumero, mesNombre } = dateFormat()
    return (
        <div className='relative header-doctor flex flex-col items-start justify-between shadow-md mb-6 text-white'>
            <div className='absolute inset-0 bg-purple-950/90 z-10'></div>
            <div className='flex gap-3 w-full md:w-fit justify-between items-center md:flex-row-reverse p-4 z-20'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        Buen día, <br />
                        Dr. {user?.firstName} {user?.lastname}
                    </h1>
                    <p className='text-gray-200'>Hoy, {`${diaNombre} ${diaNumero} de ${mesNombre}`}</p>
                </div>
                <Image src={user?.photo} alt='Doctor' className='object-cover w-28 relative z-10' />
            </div>
            <div className='w-full md:w-fit md:bg-transparent p-4 z-20'>
                <div className='flex gap-6 md:gap-2 justify-evenly'>
                    <div className='text-center w-28 bg-yellow-400/80 rounded-small p-2 space-y-2'>
                        <p className='text-2xl font-bold w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-yellow-700'>
                            8
                        </p>
                        <p className='text-xs font-extrabold uppercase text-yellow-900'>Pendientes</p>
                    </div>
                    <div className='text-center w-28 bg-emerald-200/80 rounded-small p-2 space-y-2'>
                        <p className='text-2xl font-bold w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-emerald-700'>
                            4
                        </p>
                        <p className='text-xs font-extrabold uppercase text-emerald-900'>Atendidos</p>
                    </div>
                    <div className='text-center w-28 bg-fuchsia-200/80 rounded-small p-2 space-y-2'>
                        <p className='text-2xl font-bold w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-fuchsia-700'>
                            12
                        </p>
                        <p className='text-xs font-extrabold uppercase text-fuchsia-900'>Total</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
