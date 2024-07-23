import { uploadImage } from '@/utils/uploadImage'
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
    try {
        const form = await req.formData()
        const upload = await uploadImage(form)
        if (typeof upload === 'string') {
            return NextResponse.json(
                {
                    message: 'Imagen cargada con éxito',
                    data: upload,
                },
                { status: 200 }
            )
        }
        return NextResponse.json(
            {
                message: 'Hubo un problema al cargar la imagen',
                data: null,
            },
            { status: 500 }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: 'Hubo un problema al cargar la imagen',
                data: null,
            },
            { status: 500 }
        )
    }
}
