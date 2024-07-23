import { IconType } from 'react-icons'
import { Especialidad } from './entidades.interface'

export type Paciente = Usuario & {
    fechaNacimiento: Date
    sexo: 'F' | 'M'
    factorSanguineo: string
}

export type Medico = Usuario & {
    especialidad: string
}

export type Usuario = {
    id: number
    firstName: string
    lastname: string
    phone: string
    city: string
    province: string
    email: string
    nroDocumento: number
    photo: string
    role: 'MEDICO' | 'PACIENTE' | 'ADMINISTRADOR'
}

export interface ItemProfile {
    Icono: IconType
    titulo: string
    link: string
}

export interface HoraAtencion {
    hora: string
}
