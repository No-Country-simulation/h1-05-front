'use client'

import { menuDoctor } from '@/constants/menus/doctor/doctor-menu'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import LogoVertical from '../logo-vertical'
import { useEffect } from 'react'
import { userStore } from '@/store/user-store'
import { tokenData } from '@/utils/jwt-decode'
import { eventsUserStore } from '@/store/events-user'
import useAudioSpeech from '@/hooks/useAudio'
import { toast } from 'sonner'
import { Button } from '@nextui-org/react'
import { FaMicrophone } from 'react-icons/fa6'
import { RiUserVoiceFill } from 'react-icons/ri'

export default function MenuDoctor() {
    const path = usePathname()
    const route = useRouter()
    const { token, loadingStore, cerrarSesion } = userStore()
    const { getEvents } = eventsUserStore()
    const { isListening, startListening, stopListening, transcript, setTranscript } = useAudioSpeech()

    useEffect(() => {
        if (!loadingStore && token) {
            const infoToken = tokenData(token)
            const expDate = new Date(infoToken.exp * 1000)
            const currentDate = new Date()

            if (currentDate > expDate) {
                cerrarSesion()
                route.push('/login')
            } else {
                if (infoToken.role !== 'MEDICO') {
                    route.push('/')
                } else {
                    getEvents(token)
                }
            }
        } else if (!loadingStore && !token) {
            route.push('/login')
        }
    }, [loadingStore])

    function containsKeyword(transcript: string, keywords: string[]) {
        const lowerCaseTranscript = transcript.toLowerCase()
        for (const keyword of keywords) {
            if (lowerCaseTranscript.includes(keyword)) {
                return true
            }
        }
        return false
    }
    useEffect(() => {
        if (!isListening) startListening()
    }, [])

    useEffect(() => {
        const dashArr = ['dashboard', 'home', 'inicio', 'principal']
        const testArr = ['pruebas', 'test', 'demostraciones']
        const calendarArr = ['calendario', 'eventos', 'agenda']
        const pacientesArr = ['pacientes', 'clientes', 'usuarios']

        if (containsKeyword(transcript, dashArr)) {
            route.push('/dashboard')
            toast('Cambiando al dashboard', { position: 'top-center' })
            setTranscript('')
        }
        if (containsKeyword(transcript, testArr)) {
            route.push('/dashboard/test')
            toast('Cambiando a test', { position: 'top-center' })
            setTranscript('')
        }
        if (containsKeyword(transcript, calendarArr)) {
            route.push('/dashboard/calendario')
            toast('Cambiando al calendario', { position: 'top-center' })
            setTranscript('')
        }
        if (containsKeyword(transcript, pacientesArr)) {
            route.push('/dashboard/pacientes')
            toast('Cambiando a pacientes', { position: 'top-center' })
            setTranscript('')
        }

        return () => stopListening()
    }, [transcript])
    return (
        <>
            {/* MENU MOVIL */}
            <div className='w-full bg-white py-4 fixed bottom-0 md:hidden h-fit z-20 flex flex-row justify-evenly shadow-purple-900 shadow-large'>
                {menuDoctor.map(({ name, link, Icon }) => {
                    let isActive
                    if (link === '/dashboard') {
                        isActive = path === link
                    } else {
                        isActive = path.startsWith(link)
                    }
                    const textColor = isActive ? 'text-purple-900' : 'text-gray-600'

                    return (
                        <Link
                            key={name}
                            href={link}
                            className={`flex flex-col gap-1 items-center hover:text-purple-600 hover:scale-110 transition-all ${textColor}`}
                        >
                            <Icon className='text-3xl' />
                            <span className='text-xs'>{name}</span>
                        </Link>
                    )
                })}
            </div>
            {/* MENU DESKTOP */}
            <div className='hidden md:flex flex-col justify-start bg-white'>
                <div className='flex flex-col items-center gap-3 sm:px-6 md:px-12 lg:px-20 py-3'>
                    <LogoVertical />
                </div>
                <div className='py-4 flex flex-col gap-10 sm:ml-4 md:ml-7 lg:ml-10 w-fit'>
                    {menuDoctor.map(({ name, link, Icon }) => {
                        let isActive
                        if (link === '/dashboard') {
                            isActive = path === link
                        } else {
                            isActive = path.startsWith(link)
                        }
                        const textColor = isActive ? 'text-purple-900' : 'text-gray-600'

                        return (
                            <Link
                                key={name}
                                href={link}
                                className={`flex flex-row sm:px-2 md:px-4 lg:px-6 rounded-md hover:text-purple-600 hover:bg-slate-500/10 hover:scale-110 gap-2 items-center transition-all ${textColor}`}
                            >
                                <Icon className='text-3xl' />
                                <span className='text-sm'>{name}</span>
                            </Link>
                        )
                    })}
                    <Button
                        color={isListening ? 'danger' : 'warning'}
                        size='sm'
                        variant='ghost'
                        onClick={isListening ? stopListening : startListening}
                    >
                        {isListening ? 'Detener reconocimiento de voz' : 'Activar reconocimiento de voz'}
                    </Button>
                </div>
            </div>
        </>
    )
}
