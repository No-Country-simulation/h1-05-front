import { BiSolidPlaneAlt } from 'react-icons/bi'
import { BsPostcardHeart } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiMapPin2Line } from 'react-icons/ri'
import {
    MdGroups2,
    MdOutlineCall,
    MdOutlineLocalHospital,
    MdOutlineLock,
    MdOutlineMedicalInformation,
} from 'react-icons/md'

export const profileMenu = {
    datosPersonales: [
        {
            Icono: MdOutlineMedicalInformation,
            titulo: 'Perfil profesional',
            link: `edit-perfil/perfil-profesional`,
        },
        {
            Icono: RiMapPin2Line,
            titulo: 'Dirección',
            link: `edit-perfil/direccion`,
        },
        {
            Icono: MdOutlineLocalHospital,
            titulo: 'Lugares de atención',
            link: `edit-perfil/lugares-atencion`,
        },
        {
            Icono: MdOutlineCall,
            titulo: 'Teléfono',
            link: `edit-perfil/telefono`,
        },
    ],
    datosSeguridad: [
        {
            Icono: MdOutlineLock,
            titulo: 'Contraseña',
            link: `edit-perfil/contraseña`,
        },
    ],
    coberturasMedicas: [
        {
            Icono: BsPostcardHeart,
            titulo: 'Prepagas',
            link: `edit-perfil/prepagas`,
        },
        {
            Icono: MdGroups2,
            titulo: 'Obras sociales',
            link: `edit-perfil/obras-sociales`,
        },
    ],
    sesion: [
        {
            Icono: BiSolidPlaneAlt,
            titulo: 'Licencia',
            link: `edit-perfil/licencia`,
        },
        {
            Icono: IoMdNotificationsOutline,
            titulo: 'Notificaciones',
            link: `edit-perfil/notificacion`,
        },
    ],
}
