import CalendarDashboard from '@/components/doctor/calendar-dashboard'
import { dateFormat } from '@/utils/dateFormat'
import { Divider } from '@nextui-org/react'
import HoraCalendario from '@/components/doctor/item-hora-calendario'

export default function CalendarPage() {
    const { diaNombre, diaNumero } = dateFormat()
    return (
        <div className='px-4'>
            <p className='text-xl font-bold pt-3'>Calendario</p>
            <Divider className='my-3' />
            <div className='py-2 flex justify-center items-center gap-2 bg-black/10 rounded-small mb-3'>
                <span className='text-lg font-semibold bg-white w-8 h-8 flex justify-center items-center rounded-full'>
                    8
                </span>
                <span className='font-bold'>Actividades agendadas hoy</span>
            </div>
            <div className='flex justify-center'>
                <CalendarDashboard />
            </div>
            <div className='mt-3'>
                <h3 className='text-xl text-purple-900'>
                    {diaNombre} {diaNumero}
                </h3>
                <HoraCalendario
                    evento={{
                        description: 'Junta del colegio médico',
                        id: 321231,
                        place: 'Chile',
                        type: 'REUNION',
                        startDatetime: new Date(),
                        endDateTime: new Date(),
                    }}
                />
            </div>
        </div>
    )
}
