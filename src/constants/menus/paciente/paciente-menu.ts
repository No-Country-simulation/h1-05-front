import { FaHouse, FaCalendarCheck, FaUserGroup, FaCircleUser } from 'react-icons/fa6'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { LuCalendarPlus } from 'react-icons/lu'
import { MdOutlineAccountBox } from 'react-icons/md'
import { RiTestTubeFill } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'

export const menuPaciente = [
    {
        name: 'Inicio',
        link: '/paciente',
        Icon: FaHouse,
    },
    {
        name: 'Turnos',
        link: '/paciente',
        Icon: LuCalendarPlus,
    },
    {
        name: 'Perfil',
        link: '/paciente',
        Icon: MdOutlineAccountBox,
    },
    {
        name: 'Notificaciones',
        link: '/paciente',
        Icon: IoMdNotificationsOutline,
    },
    {
        name: 'Cuenta',
        link: '/paciente',
        Icon: SlSettings,
    },
]
