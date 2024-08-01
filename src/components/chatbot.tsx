'use client'
import useAudioSpeech from '@/hooks/useAudio'
import { userStore } from '@/store/user-store'
import {
    Avatar,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Tooltip,
    useDisclosure,
} from '@nextui-org/react'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { useEffect, useState } from 'react'
import { FaMicrophone } from 'react-icons/fa6'
import { RiUserVoiceFill } from 'react-icons/ri'

export default function ChatBot() {
    const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const { user } = userStore()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { isListening, startListening, stopListening, transcript, setTranscript } = useAudioSpeech()
    const sendMessages = async (chatMessages: ChatCompletionMessageParam[]) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_FRONT}/api/ia`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat: [...chatMessages],
            }),
            cache: 'no-store',
        })
        return res
    }

    const handleSendMessage = async () => {
        try {
            setLoading(true)
            if (input.trim()) {
                const userMessage: ChatCompletionMessageParam = { content: input, role: 'user' }
                setMessages((prevMessages) => [...prevMessages, userMessage])
                setInput('')
                setTranscript('')
                const res = await sendMessages([...messages, userMessage])
                if (res.ok) {
                    const messagesRes = await res.json()
                    setMessages((prevMessages) => [...prevMessages, messagesRes])
                } else {
                    console.error('Failed to fetch messages:', res.statusText)
                }
            }
        } catch (error) {
            console.error('Error fetching messages:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setInput(transcript)
    }, [transcript])

    return (
        <>
            <div onClick={onOpen} className='fixed bottom-3 right-3 hover:cursor-pointer'>
                <Tooltip
                    isOpen={!isOpen}
                    size='lg'
                    placement='left'
                    color='secondary'
                    content={
                        <div className='hover:cursor-pointer'>
                            <p>Buenos días</p>
                            <p>¿Que necesitas hoy?</p>
                        </div>
                    }
                    showArrow
                >
                    <Avatar isBordered color='secondary' src='/img/avatar-justina.png' size='lg' />
                </Tooltip>
            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='inside' backdrop='blur'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>Asistencia virtual</ModalHeader>
                            <ModalBody>
                                <div className='flex-1'>
                                    <div className='flex justify-start'>
                                        <div className='p-3 rounded-lg max-w-xs break-words bg-yellow-100 text-gray-800'>
                                            <p className='text-xs italic'>Asistente IA</p>
                                            <p>
                                                ¡Hola {user?.firstName}! soy tu asistente médico virtual, estoy para
                                                ayudarte en tus dudas y problemas.
                                            </p>
                                        </div>
                                    </div>
                                    {messages.map((message) => (
                                        <div
                                            key={message.content as string}
                                            className={`flex my-3 ${
                                                message.role === 'user' ? 'justify-end' : 'justify-start'
                                            }`}
                                        >
                                            <div
                                                className={`p-3 rounded-lg max-w-xs break-words ${
                                                    message.role === 'user'
                                                        ? 'bg-purple-500 text-white'
                                                        : 'bg-yellow-100 text-gray-800'
                                                }`}
                                            >
                                                {message.role === 'user' && user ? (
                                                    <p className='text-xs italic text-righ w-fullt'>{user.firstName}</p>
                                                ) : (
                                                    <p className='text-xs italic'>Chat IA</p>
                                                )}
                                                <p>{message.content as string}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <div className='flex flex-col h-full p-1 max-w-md mx-auto overflow-hidden'>
                                    <div className=''>
                                        <div className='flex flex-row justify-center gap-2'>
                                            <Input
                                                type='text'
                                                radius='lg'
                                                placeholder='Escribe un mensaje...'
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                            />
                                            <Button
                                                color='warning'
                                                className='text-xs'
                                                onClick={handleSendMessage}
                                                isLoading={loading}
                                                isDisabled={loading || !input}
                                            >
                                                {loading ? 'Espere...' : 'Consultar a la IA'}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <Button
                                            color='default'
                                            className='text-xs'
                                            fullWidth
                                            onClick={isListening ? stopListening : startListening}
                                            startContent={
                                                isListening ? (
                                                    <FaMicrophone className='animate-latido text-purple-900 text-xl' />
                                                ) : (
                                                    <RiUserVoiceFill className='text-purple-600 text-xl' />
                                                )
                                            }
                                        >
                                            {isListening ? '... Escuchando' : 'Enviar mensaje por voz'}
                                        </Button>
                                    </div>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
