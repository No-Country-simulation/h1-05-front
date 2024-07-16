import { municipios_arg } from '@/constants/nomenclaturas/municipios_arg'
import { NextResponse, NextRequest } from 'next/server'
interface Municipios {
    id: number
    provincia: string
    cod_provincia: string
    comuna: string
    cod_departamento: string
}
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)

    // Create an object to hold all query parameters
    const queryParams: { [key: string]: string } = {}

    // Iterate over all query parameters
    searchParams.forEach((value, key) => {
        queryParams[key] = value
    })

    return NextResponse.json(municipios_arg)
}
