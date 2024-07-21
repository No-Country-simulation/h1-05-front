'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Button, Image } from '@nextui-org/react'
import { toast } from 'sonner'
const urlFront = process.env.NEXT_PUBLIC_URL_FRONT as string
export default function FormImage() {
    const [pending, setPending] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [urlImage, setUrl] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setPending(true)
        if (!file) {
            console.error('No file selected')
            return
        }
        const form = new FormData()
        form.append('file', file)
        const sendForm = await fetch(`${urlFront}/api/cdn`, {
            method: 'POST',
            body: form,
        })
        const res = await sendForm.json()

        setUrl(res.data)
        toast(res.message, {
            position: 'top-center',
        })
        setLoading(false)
        setPending(false)
    }

    const setImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPending(false)
            setFile(e.target.files[0])
        } else {
            setPending(true)
        }
    }

    useEffect(() => {
        const testFetchBack = async () => {
            const urlBack = process.env.NEXT_PUBLIC_URL_BACK
            console.log('probando conexión con backend')
            const res = await fetch(`${urlBack}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'medic@test.justina.io',
                    password: 'password123',
                }),
            })
            console.log({ status_res: res.status })
            if (res.ok) {
                const data = await res.json()
                console.log({ data })
            } else {
                console.log('hubo un error al conectar front con back :(', { res })
            }
        }
        testFetchBack()
    }, [])
    return (
        <>
            {!urlImage ? (
                <form onSubmit={handleSubmit} className='flex flex-row gap-2 items-center justify-center p-4'>
                    <div className='relative'>
                        <input
                            name='file'
                            type='file'
                            className='absolute inset-0 opacity-0 z-50 cursor-pointer'
                            onChange={setImage}
                            title='Presiona para cargar imagen'
                        />
                        <Image
                            alt='Subir imagen perfil'
                            src='/img/perfil/user.png'
                            className='z-10 w-32 h-32 cursor-pointer'
                        />
                    </div>
                    {/* <Button color='secondary' type='submit' isDisabled={pending} isLoading={isLoading}>
                        {isLoading ? 'Cargando...' : 'Subir imagen'}
                    </Button> */}
                </form>
            ) : (
                <div className='flex justify-center'>
                    <Image
                        alt='Foto de perfil del usuario'
                        src={urlImage}
                        width={100}
                        height={100}
                        className='rounded-full mx-auto'
                    />
                </div>
            )}
        </>
    )
}
