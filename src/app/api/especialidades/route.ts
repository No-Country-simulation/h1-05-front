import { especialidades } from '@/constants/nomenclaturas/especialidades'
import { NextResponse, NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)

    // Create an object to hold all query parameters
    const queryParams: { [key: string]: string } = {}

    // Iterate over all query parameters
    searchParams.forEach((value, key) => {
        queryParams[key] = value
    })

    if (queryParams.id) {
        const findEspecialidad = especialidades.find((especialidad) => especialidad.id === Number(queryParams.id))
        return NextResponse.json(findEspecialidad)
    }

    if (queryParams.nombre) {
        const findEspecialidades = especialidades.filter((especialidad) =>
            especialidad.nombre.toLowerCase().includes(queryParams.nombre.toLowerCase())
        )
        return NextResponse.json(findEspecialidades)
    }

    return NextResponse.json(especialidades)
}
