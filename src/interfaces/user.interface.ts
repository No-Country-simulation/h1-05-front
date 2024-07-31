import { IconType } from 'react-icons'

export type Paciente = Usuario & {
    factorSanguineo: string
    estadoDelPaciente: 'Pre-trasplante' | 'Trasplantado' | 'Donante'
    organoEnfermo: string
}

export type Medico = Usuario & {
    especialidad: string
}

export type Usuario = {
    id: number
    firstName: string
    lastName: string
    phone: string
    city: string
    province: string
    email: string
    nroDocumento: number
    photo: string
    sex: string
    deseaDonar: boolean
    donanteActivo: boolean
    role: 'MEDICO' | 'PACIENTE' | 'ADMINISTRADOR'
    medicId: number | null
    patientId: number | null
    fechaNacimiento: string
}

export interface ItemProfile {
    Icono: IconType
    titulo: string
    link: string
}

export interface HoraAtencion {
    hora: string
}
