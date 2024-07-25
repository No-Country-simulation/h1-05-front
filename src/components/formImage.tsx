'use client'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import { Button, Image, Skeleton } from '@nextui-org/react'
import { toast } from 'sonner'
const urlFront = process.env.NEXT_PUBLIC_URL_FRONT as string
export default function FormImage({ setFile }: { setFile: Dispatch<SetStateAction<string | null>> }) {
    const [isLoading, setLoading] = useState(false)
    const [urlImage, setUrl] = useState<string | null>(null)

    const setImage = async (e: ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        let singleFile: File | null = null

        if (e.target.files) {
            singleFile = e.target.files[0]
            try {
                const form = new FormData()
                form.append('file', singleFile as File)
                const sendForm = await fetch(`${urlFront}/api/cdn`, {
                    method: 'POST',
                    body: form,
                })
                const res = await sendForm.json()
                if (res.data) {
                    setFile(res.data)
                    setUrl(res.data)
                }
                toast(res.message, {
                    position: 'top-center',
                })
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <>
            <p className='text-default-500'>Sube tu foto de perfil:</p>
            <div className='relative w-fit mx-auto bg-slate-700/50 p-2 rounded-full my-2'>
                <input
                    type='file'
                    accept='image/png, image/gif, image/jpeg'
                    className='absolute inset-0 opacity-0 z-50 hover:cursor-pointer'
                    onChange={setImage}
                    title='Presiona para cargar imagen'
                />
                {isLoading ? (
                    <Skeleton className='flex rounded-full w-32 h-32' />
                ) : !urlImage ? (
                    <Image
                        alt='Subir imagen perfil'
                        src='/img/perfil/user.png'
                        className='z-10 w-32 h-32 rounded-full cursor-pointer object-cover'
                    />
                ) : (
                    <Image
                        alt='Foto de perfil del usuario'
                        src={urlImage}
                        className='w-32 h-32 rounded-full object-cover'
                    />
                )}
            </div>
        </>
    )
}
