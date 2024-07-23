'use client'
import LogoVertical from '@/components/logo-vertical'
import { Button, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { IoMdAdd } from 'react-icons/io'
// import CerrarSesion from '@/components/cerrar-sesion'
export default function TratamientoExito({ setStep, setSliderValue }: { setStep: Function; setSliderValue: Function }) {
    const route = useRouter()
    const handleAddMedicine = () => {
        setSliderValue(20)
        setStep(1)
    }
    return (
        <div className='flex flex-col items-center space-y-4'>
            <LogoVertical />
            <h1 className='font-bold  flex-auto text-center'>Tratamiento ingresado con éxito</h1>
            <Image width={300} alt='Imagen de finalización' src='/img/tratamiento-terminado-exito.svg' />
            <div className='text-center'>
                <Button color='secondary' variant='light'>
                    Ir al tratamiento
                </Button>
                <Button color='secondary' type='button' startContent={<IoMdAdd />} onClick={handleAddMedicine}>
                    Añadir otro
                </Button>
            </div>
        </div>
    )
}
