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

    // if (queryParams.id) {
    //     const findMunicipio = municipios_arg.find(
    //         (muni) => muni.id === Number(queryParams.id.toLowerCase())
    //     )
    //     return NextResponse.json(findMunicipio)
    // }

    // if (queryParams.detalle) {
    //     const findEnfermedades = municipios_arg.filter((enfermedad) =>
    //         enfermedad.detalle.toLowerCase().includes(queryParams.detalle.toLowerCase())
    //     )
    //     return NextResponse.json(findEnfermedades)
    // }

    const provincias = municipios_arg.reduce((result, item) => {
        // Si la provincia aún no existe en el objeto result, la inicializamos como un array vacío
        if (!result[item.provincia]) {
            result[item.provincia] = []
        }
        // Agregamos la comuna al array correspondiente a la provincia
        result[item.provincia].push(item)
        return result
    }, {} as Record<string, Municipios[]>)
    return NextResponse.json(provincias)
}
