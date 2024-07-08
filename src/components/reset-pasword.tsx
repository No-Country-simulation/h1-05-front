'use client'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import ConfirmPasswordChange from './confirmation-password'

export default function ResetPassword() {
    const { isOpen, onOpenChange } = useDisclosure()
    const [email, setEmail] = useState('')
    const [reseted, setReseted] = useState(false)

    const handleReset = () => {
        setReseted(true)
        if (!email) {
            console.log('se debe validar mail')
        } else {
            console.log(email)
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
                        <h1>Recuperación de contraseña</h1>
                        <p>Ingrese el email del usuario que quiera recuperar y presione el botón Recuperar Contraseña</p>
                        <Input color='secondary' name='email' label='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        {reseted && <ConfirmPasswordChange />}
                    </ModalBody>
                    <ModalFooter className='flex flex-row justify-between'>
                        <Button color='warning' onClick={onOpenChange}>
                            Cerrar
                        </Button>
                        <Button color='secondary' disabled={reseted} onClick={handleReset}>
                            Recuperar contraseña
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
