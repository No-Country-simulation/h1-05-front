'use client'

import { especialidades } from '@/constants/nomenclaturas/especialidades'
import { municipios_arg } from '@/constants/nomenclaturas/municipios_arg'
import { Autocomplete, AutocompleteItem, Select, Selection, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

interface Ciudades {
    id: number
    provincia: string
    cod_provincia: string
    comuna: string
    cod_departamento: string
}

export default function TestPage() {
    const [provincias, setProvincias] = useState<Record<string, Ciudades[]>>({})
    const [ciudades, setCiudades] = useState<Ciudades[]>([])

    useEffect(() => {
        const provincias = municipios_arg.reduce((result, item) => {
            // Si la provincia aún no existe en el objeto result, la inicializamos como un array vacío
            if (!result[item.provincia]) {
                result[item.provincia] = []
            }
            // Agregamos la comuna al array correspondiente a la provincia
            result[item.provincia].push(item)
            return result
        }, {} as Record<string, Ciudades[]>)
        setProvincias(provincias)
    }, [])

    const handleSelectChange = (keys: Selection) => {
        const data = new Set(keys)
        if (data.size === 0) {
            setCiudades([])
        } else {
            const provincia: string = data.entries().next().value[0]
            const ciudades = provincias[provincia]
            setCiudades(ciudades)
        }
    }
    return (
        <div className='min-h-screen -mt-16 flex flex-col gap-4 items-center justify-center'>
            <p className='mb-4'>Pagina de pruebas</p>
            <Select
                onSelectionChange={handleSelectChange}
                color='primary'
                label='Seleccione provincia'
                className='max-w-xs'
                selectionMode='single'
            >
                {Object.keys(provincias).map((provincia) => (
                    <SelectItem value={provincia} key={provincia}>
                        {provincia}
                    </SelectItem>
                ))}
            </Select>

            {ciudades.length > 0 && (
                <Autocomplete label='Seleccione ciudad' color='secondary' className='max-w-xs'>
                    {ciudades.map((ciudad) => (
                        <AutocompleteItem value={ciudad.id} key={ciudad.id}>
                            {ciudad.comuna}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            )}

            <Select label='Seleccione especialidad' color='success' className='max-w-xs' selectionMode='multiple'>
                {especialidades.map((especialidad) => (
                    <SelectItem key={especialidad.id} value={especialidad.nombre}>
                        {especialidad.nombre}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}
