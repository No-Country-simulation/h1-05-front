'use client'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Key, useMemo, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { medicamentos } from '@/constants/nomenclaturas/medicamentos'
import { medicosDisponibles } from '@/constants/demo-medicos-disponibles-para-turnos'
import useDebounce from '@/hooks/useDebounce'
import { MedicosDisponibles } from '@/interfaces/medico-disponible.interface'
import CardMedicoDisponible from '@/components/paciente/card-medico-disponible'

import CalendarDashboard from '@/components/doctor/calendar-dashboard'

export default function formAgregarTurno() {
    const route = useRouter()
    const [value, setValue] = useState('')
    // const [medicosDisponiblesBuscado, setMedicoDisponibleBuscado] = useState<MedicosDisponibles[]>([])
    const debouncedValue = useDebounce(value, 300)

    //consultar a backend por médicos disponibles

    // const filteredMedicamentos = useMemo(() => {
    //     const seen = new Set()
    //     return medicamentos
    //         .filter((medicina) => {
    //             const esNombre = medicina.nombre_comercial.toLowerCase().includes(debouncedValue.toLowerCase())
    //             if (esNombre && !seen.has(medicina.nombre_comercial.toLowerCase() + medicina.POTENCIA?.toLowerCase())) {
    //                 seen.add(medicina.nombre_comercial.toLowerCase() + medicina.POTENCIA?.toLowerCase())
    //                 return true
    //             }
    //             return false
    //         })
    //         .slice(0, 10)
    // }, [debouncedValue])

    // const handleAutocomplete = (input: Key | null) => {
    //     console.log(input)
    //     if (input) {
    //         const findMedicina = medicamentos.find((medicina) => medicina.clave_csf === input)
    //         console.log(findMedicina)
    //     }
    // }

    // const buscarCita = (value: string) => {
    //     return medicosDisponibles.filter(
    //         (medico) =>
    //             medico.firstName.toLowerCase().includes(value.toLowerCase()) ||
    //             medico.lastname.toLowerCase().includes(value.toLowerCase())
    //     )
    // }

    const handleInputChange = (value: string) => {
        console.log(value)
        if (value) {
            setValue(value)
        }
        // const resultadosBusqueda = buscarCita(value)
        // setMedicoDisponibleBuscado(resultadosBusqueda)
    }
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack
                    className='text-[#9A41CE] flex-none hover:cursor-pointer'
                    onClick={() => route.back()}
                />
                <h1 className='font-bold  flex-auto text-center'>Agregar turno</h1>
            </div>
            <p>Selecciona el medicamento a asignar.</p>
            <Autocomplete
                label='Buscar médico / especialidad'
                className='max-w-xm w-full'
                color='secondary'
                startContent={<IoSearch />}
                onInputChange={handleInputChange}
                // onSelectionChange={handleAutocomplete}
            >
                {medicosDisponibles.map((medico) => (
                    <AutocompleteItem key={medico.id} value={medico.firstName + ' ' + medico.lastname}>
                        {medico.firstName + ' ' + medico.lastname}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
            <div className='flex justify-center'>
                <CalendarDashboard />
            </div>
        </div>
    )
}
