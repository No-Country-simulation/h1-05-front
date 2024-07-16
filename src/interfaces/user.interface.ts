import { Especialidad } from './entidades.interface'

export type Paciente = Usuario & {
    entidadId: number
    financiadorId: number
    tratamientoId?: number
    personalMedicoId?: number
    patologiaId?: string
    tipoDocumentoId: number
    numeroDocumento: number
    fechaNacimiento: Date
    sexo: 'F' | 'M'
    factorSanguineo: string
}

export type Medico = Usuario & {
    especialidadId: number
    tipoDocumentoId: number
    descripcion: string
    especialidad: Especialidad
}

export type Usuario = {
    id: number
    img: string
    name: string
    lastname: string
    phoneNumber: number
    ciudad: string
    provincia: string
    email: string
    role: 'medico' | 'paciente' | 'administrador'
}
