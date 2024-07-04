import { Especialidad } from './entidades.interface'

export type Paciente = Usuario & {
    entidadId: number
    financiadorId: number
    tratamientoId: number
    personalMedicoId: number
    patologiaId: number
    tipoDocumentoId: number
    nombre: string
    apellido: string
    numeroDocumento: string
    fechaNacimiento: Date
    sexo: string
    factorSanguineo: string
}

export type Medico = Usuario & {
    especialidadId: number
    tipoDocumentoId: number
    descripcion: string
    especialidad: Especialidad
}

export type Usuario = {
    id: string
    name: string
    lastname: string
    phoneNumber: string
    ciudad: string
    email: string
    role: 'medico' | 'paciente' | 'administrador'
}
