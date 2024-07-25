'use client'
import { Autocomplete, AutocompleteItem, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Key, useMemo, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { medicamentos } from '@/constants/nomenclaturas/medicamentos'
import useDebounce from '@/hooks/useDebounce'
// import CerrarSesion from '@/components/cerrar-sesion'
export default function Medicacion() {
    const route = useRouter()
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 300)

    const filteredMedicamentos = useMemo(() => {
        const seen = new Set()
        return medicamentos
            .filter((medicina) => {
                const esNombre = medicina.nombre_comercial.toLowerCase().includes(debouncedValue.toLowerCase())
                if (esNombre && !seen.has(medicina.nombre_comercial.toLowerCase() + medicina.POTENCIA?.toLowerCase())) {
                    seen.add(medicina.nombre_comercial.toLowerCase() + medicina.POTENCIA?.toLowerCase())
                    return true
                }
                return false
            })
            .slice(0, 10)
    }, [debouncedValue])

    const handleAutocomplete = (input: Key | null) => {
        console.log(input)
        if (input) {
            const findMedicina = medicamentos.find((medicina) => medicina.clave_csf === input)
            console.log(findMedicina)
        }
    }

    const handleInputChange = (value: string) => {
        console.log(value)
        if (value) {
            setValue(value)
        }
    }
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <IoIosArrowBack
                    className='text-[#9A41CE] flex-none hover:cursor-pointer'
                    onClick={() => route.back()}
                />
                <h1 className='font-bold  flex-auto text-center'>Medicamento</h1>
            </div>
            <p>Selecciona el medicamento a asignar.</p>
            <Autocomplete
                label='Buscar medicamento'
                className='max-w-xm w-full'
                color='secondary'
                startContent={<IoSearch />}
                onInputChange={handleInputChange}
                onSelectionChange={handleAutocomplete}
            >
                {filteredMedicamentos.map((medicina) => (
                    <AutocompleteItem key={medicina.clave_csf} value={medicina.nombre_comercial}>
                        {`${medicina.nombre_comercial} ${medicina.POTENCIA ? medicina.POTENCIA : ''}`}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
        </div>
    )
}
