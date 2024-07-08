export type Especialidad = {
    id: number
    tipo: string
}

export type TipoDocumento = {
    id: number
    descripcion: string
}

export type Laboratorio = {
    id: number
    descripcion: string
}

export type Farmacia = {
    id: number
    descripcion: string
    laboratorioId: number
}

export type Medicamento = {
    id: number
    descripcion: string
    farmaciaId: number
    tratamientoId: number
    patologiaId: number
}

export type Tratamiento = {
    id: number
    descripcion: string
    patologiaId: number
}

export type Patologia = {
    id: number
    descripcion: string
    especialidadId: number
}

export type Entidad = {
    id: number
    descripcion: string
}

export type Financiador = {
    id: number
    descripcion: string
    personalMedicoId: number
}

export type Evento = {
    id: number
    medicoID: number
    pacienteID: number
    fecha: Date // formato fecha completo incluye hora
    lugar: Entidad
    estado: 'pendiente' | 'completado' | 'cancelado'
}
