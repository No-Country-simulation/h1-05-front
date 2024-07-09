import { Evento } from '@/interfaces/entidades.interface'

export const eventos: Evento[] = [
    {
        id: 1,
        medicoID: 987654,
        pacienteID: 3001,
        fecha: new Date('2024-07-11T08:00:00.000Z'),
        lugar: {
            id: 1,
            descripcion: 'Clínica San Pedro',
        },
        estado: 'completado',
    },
    {
        id: 2,
        medicoID: 987654,
        pacienteID: 3002,
        fecha: new Date('2024-07-11T09:00:00.000Z'),
        lugar: {
            id: 2,
            descripcion: 'Centro Médico Los Álamos',
        },
        estado: 'pendiente',
    },
    {
        id: 3,
        medicoID: 987654,
        pacienteID: 3003,
        fecha: new Date('2024-07-11T10:00:00.000Z'),
        lugar: {
            id: 3,
            descripcion: 'Clínica Santa María',
        },
        estado: 'cancelado',
    },
    {
        id: 4,
        medicoID: 987654,
        pacienteID: 3004,
        fecha: new Date('2024-07-11T11:00:00.000Z'),
        lugar: {
            id: 1,
            descripcion: 'Clínica San Pedro',
        },
        estado: 'completado',
    },
    {
        id: 5,
        medicoID: 987654,
        pacienteID: 3005,
        fecha: new Date('2024-07-11T12:00:00.000Z'),
        lugar: {
            id: 4,
            descripcion: 'Hospital Central',
        },
        estado: 'pendiente',
    },
    {
        id: 6,
        medicoID: 987654,
        pacienteID: 3006,
        fecha: new Date('2024-07-11T13:00:00.000Z'),
        lugar: {
            id: 2,
            descripcion: 'Centro Médico Los Álamos',
        },
        estado: 'cancelado',
    },
    {
        id: 7,
        medicoID: 987654,
        pacienteID: 3007,
        fecha: new Date('2024-07-11T14:00:00.000Z'),
        lugar: {
            id: 3,
            descripcion: 'Clínica Santa María',
        },
        estado: 'completado',
    },
    {
        id: 8,
        medicoID: 987654,
        pacienteID: 3008,
        fecha: new Date('2024-07-11T15:00:00.000Z'),
        lugar: {
            id: 1,
            descripcion: 'Clínica San Pedro',
        },
        estado: 'pendiente',
    },
    {
        id: 9,
        medicoID: 987654,
        pacienteID: 3009,
        fecha: new Date('2024-07-11T16:00:00.000Z'),
        lugar: {
            id: 4,
            descripcion: 'Hospital Central',
        },
        estado: 'cancelado',
    },
    {
        id: 10,
        medicoID: 987654,
        pacienteID: 3010,
        fecha: new Date('2024-07-11T17:00:00.000Z'),
        lugar: {
            id: 2,
            descripcion: 'Centro Médico Los Álamos',
        },
        estado: 'completado',
    },
]
