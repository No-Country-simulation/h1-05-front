'use client'
import { Select, Selection, SelectItem } from '@nextui-org/react'
import { FormEvent, useState } from 'react'
const tutoriales = [
    {
        search: 'Tutorial inyección intradérmica',
        title: '¿Cómo inyectarse insulina de manera segura?',
    },
    {
        search: 'Cuidado de cateter central',
        title: '¿Cómo usar y cuidar un catéter central / dispositivo acceso venoso?',
    },
    {
        search: 'Instrucción uso Holter presión',
        title: '¿Cómo usar correctamente la máquina de presión arterial?',
    },
]

export default function SearchVideos() {
    const [videos, setVideos] = useState<string[]>([])
    const handleSelectChange = (input: Selection) => {
        const [arr] = Array.from(input)
        if (arr) searchVideos(arr as string)
    }

    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const searchVideos = async (consulta: string) => {
        interface RespYT {
            kind: string
            etag: string
            id: {
                kind: string
                videoId: string
            }
        }
        if (!consulta) return console.log('No se seleccionó consulta')
        const url = process.env.NEXT_PUBLIC_URL_FRONT
        const res = await fetch(`${url}/api/youtube?query=${consulta}`)
        const data: RespYT[] = await res.json()
        const videos = data.map((v) => `https://www.youtube.com/embed/${v.id.videoId}`)
        setVideos(videos)
    }

    return (
        <>
            <form onSubmit={sendForm} className='w-full flex flex-row items-center justify-center gap-3 px-6'>
                <Select
                    onSelectionChange={handleSelectChange}
                    label='Escoja una opción para ver tutoriales'
                    className='max-w-screen-sm'
                    color='secondary'
                >
                    {tutoriales.map((item) => (
                        <SelectItem key={item.search} value={item.search}>
                            {item.title}
                        </SelectItem>
                    ))}
                </Select>
            </form>
            <div className='w-full space-y-4 text-center flex flex-col items-center'>
                {videos.map((v) => (
                    <iframe
                        src={v}
                        // width={500}
                        height={280}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        title='Ejemplo de videos en youtube'
                        className='px-4 w-full lg:w-1/2'
                    />
                ))}
            </div>
        </>
    )
}
