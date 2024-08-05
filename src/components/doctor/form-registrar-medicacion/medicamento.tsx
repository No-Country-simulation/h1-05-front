'use client'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { Dispatch, Key, SetStateAction, useMemo, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { medicamentos } from '@/constants/nomenclaturas/medicamentos'
// import CerrarSesion from '@/components/cerrar-sesion'
export default function Medicacion({
    list = [],
    setList,
}: {
    list?: string[]
    setList?: Dispatch<SetStateAction<string[]>>
}) {
    const [medicines, setMedicines] = useState(medicamentos)
    const [value, setValue] = useState('')

    const filteredMedicamentos = useMemo(() => {
        const seen = new Set()
        return medicines
            .filter((medicina) => {
                const esNombre =
                    medicina.nombre_comercial.toLowerCase().includes(value.toLowerCase()) ||
                    medicina.principio_activo.toLowerCase().includes(value.toLowerCase())
                if (esNombre && !seen.has(medicina.nombre_comercial.toLowerCase() + medicina.POTENCIA?.toLowerCase())) {
                    seen.add(medicina.nombre_comercial.toLowerCase() + medicina.POTENCIA?.toLowerCase())
                    return true
                }
                return false
            })
            .slice(0, 10)
    }, [value])

    const handleAutocomplete = (input: Key | null) => {
        if (input) {
            const findMedicina = medicines.find((medicina) => medicina.clave_csf === input)
            if (findMedicina) {
                if (setList) {
                    setList((prevList) => {
                        if (!prevList.includes(findMedicina.clave_csf)) {
                            return [...prevList, findMedicina.clave_csf]
                        }
                        return prevList
                    })
                }
            }
        }
    }

    return (
        <Autocomplete
            label='Buscar medicamento (Deshabilitado temporalmente)'
            className='max-w-xm w-full'
            color='secondary'
            startContent={<IoSearch />}
            // onChange={(e) => console.log(e.target.value)}
            onInputChange={(newValue) => newValue && setValue(newValue)}
            onSelectionChange={handleAutocomplete}
        >
            {filteredMedicamentos.map((medicina) => (
                <AutocompleteItem key={medicina.clave_csf} value={medicina.nombre_comercial}>
                    {`${medicina.nombre_comercial} ${medicina.POTENCIA ? medicina.POTENCIA : ''} (${
                        medicina.principio_activo
                    })`}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    )
}
