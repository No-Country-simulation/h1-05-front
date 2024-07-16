'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure, Tooltip } from '@nextui-org/react'
import { FaCirclePlus } from 'react-icons/fa6'

export default function CreatePaciente() {
    const handleReset = () => {}
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
            <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                <ModalContent>
                    <ModalBody className='py-6'>
                        <h3 className='text-2xl font-bold'>Crear nuevo paciente</h3>
                        <p>Ingrese todos los datos del paciente</p>
                        <p>---FORMULARIO PACIENTE---</p>
                    </ModalBody>
                    <ModalFooter className='flex flex-row justify-between'>
                        <Button color='warning' onClick={onOpenChange}>
                            Cerrar
                        </Button>
                        <Button color='secondary' onClick={handleReset}>
                            Crear nuevo paciente
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
