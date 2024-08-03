'use client'
import { Modal, ModalBody, ModalContent, useDisclosure, Tooltip } from '@nextui-org/react'
import { FaCirclePlus } from 'react-icons/fa6'
import RegisterPatient from '../form-register-patient'

export default function CreatePaciente() {
    const { isOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <Tooltip
                content='Crear paciente'
                showArrow
                color='secondary'
                placement='top-end'
                className='pointer-events-none'
            >
                <div
                    className='fixed flex flex-row justify-center items-center bottom-24 right-2 z-20 shadow-lg hover:scale-110 transition-all bg-purple-800 w-12 h-12 rounded-md hover:cursor-pointer'
                    onClick={onOpenChange}
                >
                    <FaCirclePlus className='text-2xl text-white' />
                </div>
            </Tooltip>
            <Modal
                size='lg'
                placement='center'
                scrollBehavior='inside'
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop='blur'
            >
                <ModalContent>
                    <ModalBody className='py-6'>
                        <h3 className='text-2xl font-bold'>Crear nuevo paciente</h3>
                        <RegisterPatient />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
