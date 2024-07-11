import { enfermedades } from '@/constants/nomenclaturas/enfermedades'
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
        const findEnfermedad = enfermedades.find(
            (enfermedad) => enfermedad.id.toLowerCase() === queryParams.id.toLowerCase()
        )
        return NextResponse.json(findEnfermedad)
    }

    if (queryParams.detalle) {
        const findEnfermedades = enfermedades.filter((enfermedad) =>
            enfermedad.detalle.toLowerCase().includes(queryParams.detalle.toLowerCase())
        )
        return NextResponse.json(findEnfermedades)
    }

    return NextResponse.json(enfermedades)
}
