'use client'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import ConfirmPasswordChange from './confirmation-password'
import { toast } from 'sonner'

const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export default function ResetPassword() {
    const { isOpen, onOpenChange } = useDisclosure()
    const [email, setEmail] = useState('')
    const [reseted, setReseted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const handleReset = async () => {
        try {
            setLoading(true)
            const isValid = validateEmail(email)
            const message = 'Por favor ingrese un email válido'
            isValid ? setErrorMessage('') : setErrorMessage(message)

            if (isValid) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK}/auth/reset-password?email=${email}`)
                // Simulate password reset logic here (e.g., send reset email)
                if (res.ok) {
                    setReseted(true)
                } else {
                    toast.error('Ocurrió un error al solicitar una nueva contraseña')
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className='ml-auto text-purple-800 hover:cursor-pointer' onClick={onOpenChange}>
                Olvidé mi contraseña
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                <ModalContent>
                    <ModalBody className='py-6'>
                        <h3>Recuperación de contraseña</h3>
                        <p>
                            Ingrese el email del usuario que quiera recuperar y presione el botón Recuperar Contraseña
                        </p>
                        <Input
                            color='secondary'
                            name='email'
                            label='E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className='text-red-500'>{errorMessage}</p>
                        {reseted && <ConfirmPasswordChange />}
                    </ModalBody>
                    <ModalFooter className='flex flex-row justify-between'>
                        <Button color='warning' onClick={onOpenChange}>
                            Cerrar
                        </Button>
                        <Button color='secondary' isDisabled={loading} isLoading={loading} onClick={handleReset}>
                            Recuperar contraseña
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
