import { Medico } from '@/interfaces/user.interface'

export const medico: Medico = {
    id: 123123123,
    ciudad: 'Buenos Aires',
    descripcion: 'Comprensivo, muy empático',
    email: 'doctor@correodemo.com',
    especialidad: {
        id: 1234132,
        tipo: 'Transplantes',
    },
    especialidadId: 1234132,
    lastname: 'Espinoza',
    name: 'Iñaki',
    phoneNumber: 529898989898,
    role: 'medico',
    tipoDocumentoId: 321321,
    img: '/img/samples/doctor.png',
}
