'use client'
import { Paciente } from '@/interfaces/user.interface'
import { userStore } from '@/store/user-store'
import { Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { AiFillCheckSquare, AiOutlineReload } from 'react-icons/ai'
import { GoCheckCircleFill } from 'react-icons/go'
import { LuPencilLine } from 'react-icons/lu'
import { toast } from 'sonner'

export default function EditProfileInput({
    value,
    userKey,
    Icon,
    label,
}: {
    label: string
    value: string
    userKey: string
    Icon: IconType
}) {
    const { token, setUser, user } = userStore()
    const [form, setForm] = useState({
        [userKey]: value,
    })
    const [isEditing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sendForm, setSend] = useState(false)

    const updateUser = async (token: string) => {
        try {
            setLoading(true)
            const url = process.env.NEXT_PUBLIC_URL_BACK
            const res = await fetch(`${url}/auth/me`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(form),
                cache: 'no-cache',
            })
            if (res.ok) {
                const data: Paciente = await res.json()
                setUser({ ...user, ...data })
            } else {
                if (res.status === 400) {
                    const data: {
                        description: { [key: string]: string }
                    } = await res.json()

                    toast.error(data.description[userKey] ? data.description[userKey] : 'Hubo un error al actualizar', {
                        position: 'top-center',
                    })
                } else {
                    toast.error('Hubo un error al actualizar el perfil', { position: 'top-center' })
                }
                setForm({ [userKey]: value })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            setSend(false)
        }
    }
    useEffect(() => {
        if (!isEditing && sendForm && token) updateUser(token)
    }, [isEditing])
    return (
        <div className='relative'>
            <Input
                label={label}
                value={form[userKey]}
                isDisabled={!isEditing}
                onChange={(e) => setForm({ [userKey]: e.target.value })}
                startContent={
                    loading ? (
                        <AiOutlineReload className='text-2xl text-purple-800 animate-spinner-ease-spin' />
                    ) : (
                        <Icon className='text-xl text-purple-800' />
                    )
                }
            />
            {isEditing ? (
                <GoCheckCircleFill
                    className='absolute text-3xl text-green-800 cursor-pointer right-3 top-1/4'
                    onClick={() => {
                        setEditing(false)
                        setSend(true)
                    }}
                />
            ) : (
                <LuPencilLine
                    className='absolute text-xl text-purple-800 cursor-pointer right-3 top-1/2'
                    onClick={() => setEditing(true)}
                />
            )}
        </div>
    )
}
