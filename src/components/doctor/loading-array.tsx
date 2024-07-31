import { Skeleton } from '@nextui-org/react'

export default function LoadingArray() {
    return (
        <div className='space-y-3'>
            <div className='w-full flex items-center gap-3 rounded-md bg-slate-300 py-4 px-6'>
                <div>
                    <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
            <div className='w-full flex items-center gap-3 rounded-md bg-slate-300 py-4 px-6 opacity-40'>
                <div>
                    <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Skeleton className='h-3 w-3/5 rounded-lg' />
                    <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
            </div>
        </div>
    )
}
