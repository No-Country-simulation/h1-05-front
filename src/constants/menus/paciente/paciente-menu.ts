import { FaHouse } from 'react-icons/fa6'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineAccountBox } from 'react-icons/md'
import { RiFolderVideoLine } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'

export const menuPaciente = [
    {
        name: 'Inicio',
        link: '/paciente',
        Icon: FaHouse,
    },
    {
        name: 'Tutoriales',
        link: '/paciente/tutoriales',
        Icon: RiFolderVideoLine,
    },
    {
        name: 'Perfil',
        link: '/paciente/perfil',
        Icon: MdOutlineAccountBox,
    },
]
