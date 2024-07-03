export type Paciente = {
    //pendiente
}

export type Medico = {
    medicalLicense: number
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
