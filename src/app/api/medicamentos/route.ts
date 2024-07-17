import { medicamentos } from '@/constants/nomenclaturas/medicamentos'
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
        const findMedicamento = medicamentos.find(
            (medicamento) => medicamento.clave_csf.toLowerCase() === queryParams.id.toLowerCase()
        )
        return NextResponse.json(findMedicamento)
    }

    if (queryParams.nombre) {
        const findMedicamentos = medicamentos.filter((medicamento) =>
            medicamento.nombre_comercial.toLowerCase().includes(queryParams.nombre.toLowerCase())
        )
        return NextResponse.json(findMedicamentos)
    }

    if (queryParams.laboratorio) {
        const findMedicamentos = medicamentos.filter((medicamento) =>
            medicamento.laboratorio.toLowerCase().includes(queryParams.laboratorio.toLowerCase())
        )
        return NextResponse.json(findMedicamentos)
    }

    if (queryParams.activo) {
        const findMedicamentos = medicamentos.filter((medicamento) =>
            medicamento.principio_activo.toLowerCase().includes(queryParams.activo.toLowerCase())
        )
        return NextResponse.json(findMedicamentos)
    }

    return NextResponse.json(medicamentos)
}
