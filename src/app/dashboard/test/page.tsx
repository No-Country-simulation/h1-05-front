'use client'

import { especialidades } from '@/constants/nomenclaturas/especialidades'
import { type Ciudades, municipios_arg } from '@/constants/nomenclaturas/municipios_arg'
import { Autocomplete, AutocompleteItem, Select, Selection, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function TestPage() {
    const [ciudades, setCiudades] = useState<Ciudades[]>([])

    const handleSelectChange = (provincia: string) => {
        if (!provincia) {
            setCiudades([])
        } else {
            const ciudades: Ciudades[] = municipios_arg[provincia]
            setCiudades(ciudades)
        }
    }
    return (
        <div className='min-h-screen -mt-16 flex flex-col gap-4 items-center justify-center'>
            <p className='mb-4'>Pagina de pruebas</p>
            <Autocomplete
                onInputChange={handleSelectChange}
                color='primary'
                label='Seleccione provincia'
                className='max-w-xs'
            >
                {Object.keys(municipios_arg).map((provincia) => (
                    <AutocompleteItem value={provincia} key={provincia}>
                        {provincia}
                    </AutocompleteItem>
                ))}
            </Autocomplete>

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
