import { NextResponse, NextRequest } from 'next/server'
import { prepagas } from '@/constants/nomenclaturas/prepagas'
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)

    // Create an object to hold all query parameters
    const queryParams: { [key: string]: string } = {}

    // Iterate over all query parameters
    searchParams.forEach((value, key) => {
        queryParams[key] = value
    })

    if (queryParams.id) {
        const findPrepaga = prepagas.find((prepaga) => prepaga.id === Number(queryParams.id))
        return NextResponse.json(findPrepaga)
    }

    if (queryParams.entidad) {
        const findPrepaga = prepagas.find((prepaga) =>
            prepaga.entidad.toLowerCase().includes(queryParams.entidad.toLowerCase() ?? '')
        )
        return NextResponse.json(findPrepaga)
    }

    return NextResponse.json(prepagas)
}
