import { UploadApiResponse } from 'cloudinary'

export interface ErrorUpload {
    message: string
    name: string
    http_code: number
}

export interface SuccessUpload extends UploadApiResponse {
    asset_id: string
    public_id: string
    version: number
    version_id: string
    signature: string
    width: number
    height: number
    format: string
    resource_type: 'image' | 'video' | 'raw' | 'auto'
    created_at: string
    tags: []
    bytes: number
    type: string
    etag: string
    placeholder: false
    url: string
    secure_url: string
    folder: string
    access_mode: string
    original_filename: string
    eager: {
        transformation: string
        width: number
        height: number
        bytes: number
        format: string
        url: string
        secure_url: string
    }[]
}
export type UploadResult = SuccessUpload
