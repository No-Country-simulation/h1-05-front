'use client'
type TipoReunion = 'REUNION' | 'CONFERENCIA' | 'CITA' | 'OTRO'
export default function HoraCalendario({ hora, type }: { hora: string; type: TipoReunion }) {
    let bgColor = 'bg-default-800/80'
    if (type === 'CITA') bgColor = 'bg-purple-800/80'
    if (type === 'CONFERENCIA') bgColor = 'bg-orange-700/80'
    if (type === 'REUNION') bgColor = 'bg-green-700/80'
    return (
        <div className='flex flex-col gap-4 my-4'>
            <div className='flex flex-row gap-4 items-center justify-between'>
                <div className='w-20 text-center bg-slate-500 px-3 py-1 rounded-full text-white'>{hora}</div>
                <div className='text-center w-full'>
                    <div className={`${bgColor} px-3 py-1 rounded-large text-white`}>
                        {type === 'CITA' && <span className='text-sm'>Cita con Pedro Fernández</span>}
                        {type === 'CONFERENCIA' && <span className='text-sm'>Conferencia</span>}
                        {type === 'REUNION' && <span className='text-sm'>Reunión</span>}
                        {type === 'OTRO' && <span className='text-sm'>Cita</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
