'use client'
import { userStore } from '@/store/user-store'

export default function Home() {
    //este va a tener que escuchar cuando exista un user
    // si existe user -> dashboard else -> login
    const { user } = userStore()
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>Usuario: {user}</div>
        </main>
    )
}
