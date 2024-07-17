import { FaHouse, FaCalendarCheck, FaUserGroup, FaCircleUser } from 'react-icons/fa6'
import { RiTestTubeFill } from 'react-icons/ri'

export const menuDoctor = [
    {
        name: 'Inicio',
        link: '/dashboard',
        Icon: FaHouse,
    },
    {
        name: 'Calendario',
        link: '/dashboard/calendario',
        Icon: FaCalendarCheck,
    },
    {
        name: 'Pacientes',
        link: '/dashboard/pacientes',
        Icon: FaUserGroup,
    },
    {
        name: 'Perfil',
        link: '/dashboard/perfil',
        Icon: FaCircleUser,
    },
    {
        name: 'Test',
        link: '/dashboard/test',
        Icon: RiTestTubeFill,
    },
]
