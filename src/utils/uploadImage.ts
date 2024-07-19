'use server'
import { ErrorUpload, SuccessUpload, UploadResult } from '@/interfaces/cdn.interface'
import { v2 } from 'cloudinary'

export const uploadImage = async (data: FormData) => {
    const { CDN_SECRET, CDN_APIKEY, CDN_NAME, CDN_PRESET } = process.env
    v2.config({
        account_id: CDN_NAME,
        api_key: CDN_APIKEY,
        api_secret: CDN_SECRET,
        cloud_name: CDN_NAME,
        secure: true,
    })
    console.log({ data })
    if (!data || !data.get) {
        return { message: 'Debe cargar una imagen desde su dispositivo' } as ErrorUpload
    }
    const fileEntry = data.get('file')
    if (fileEntry instanceof File) {
        const file: File = fileEntry
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)
        const upload: UploadResult = await new Promise((resolve, reject) => {
            v2.uploader
                .upload_stream(
                    {
                        folder: 'justina/uploads',
                        eager: [{ format: 'webp', width: 500, height: 500, crop: 'scale' }],
                    },
                    function (error, result) {
                        if (error) {
                            reject(error)
                            return
                        }
                        resolve(result as SuccessUpload)
                    }
                )
                .end(buffer)
        })
        const url = upload.eager[0].secure_url

        if (url) {
            return url
        }
        return null
    } else {
        console.error('No se encontró imagen cargada')
        return null
    }
}
