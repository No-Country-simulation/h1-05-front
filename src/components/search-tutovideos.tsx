'use client'
import { Card, Select, Selection, SelectItem, Skeleton } from '@nextui-org/react'
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
    const [isLoading, setLoading] = useState(false)
    const handleSelectChange = (input: Selection) => {
        const [arr] = Array.from(input)
        if (arr) searchVideos(arr as string)
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
        setLoading(true)
        if (!consulta) return console.log('No se seleccionó consulta')
        const url = process.env.NEXT_PUBLIC_URL_FRONT
        const res = await fetch(`${url}/api/youtube?query=${consulta}`)
        const data: RespYT[] = await res.json()
        const videos = data.map((v) => `https://www.youtube.com/embed/${v.id.videoId}`)
        setVideos(videos)
        setLoading(false)
    }

    return (
        <>
            <Select
                onSelectionChange={handleSelectChange}
                label='Escoja una opción para ver tutoriales'
                color='secondary'
                className='max-w-lg'
            >
                {tutoriales.map((item) => (
                    <SelectItem key={item.search} value={item.search}>
                        {item.title}
                    </SelectItem>
                ))}
            </Select>
            {isLoading ? (
                <div className='mt-6 flex flex-col items-center md:flex-row md:justify-evenly gap-3'>
                    <Card className='w-[27%] space-y-5 p-1' radius='lg'>
                        <Skeleton className='rounded-lg'>
                            <div className='h-52 rounded-lg'></div>
                        </Skeleton>
                    </Card>
                    <Card className='w-[27%] space-y-5 p-1' radius='lg'>
                        <Skeleton className='rounded-lg'>
                            <div className='h-52 rounded-lg'></div>
                        </Skeleton>
                    </Card>
                    <Card className='w-[27%] space-y-5 p-1' radius='lg'>
                        <Skeleton className='rounded-lg'>
                            <div className='h-52 rounded-lg'></div>
                        </Skeleton>
                    </Card>
                </div>
            ) : (
                <div className='mt-6 flex flex-col items-center md:flex-row md:justify-evenly gap-3'>
                    {videos.map((v) => (
                        <iframe
                            key={v}
                            src={v}
                            height={200}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            title='Ejemplo de videos en youtube'
                            className='drop-shadow-xl'
                        />
                    ))}
                </div>
            )}
        </>
    )
}
