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
            link: `perfil/perfil-profesional`,
        },
        {
            Icono: RiMapPin2Line,
            titulo: 'Dirección',
            link: `perfil/direccion`,
        },
        {
            Icono: MdOutlineLocalHospital,
            titulo: 'Lugares/horarios de atención',
            link: `perfil/lugar-horario-atencion`,
        },
        {
            Icono: MdOutlineCall,
            titulo: 'Teléfono',
            link: `perfil/telefono`,
        },
    ],
    datosSeguridad: [
        {
            Icono: MdOutlineLock,
            titulo: 'Contraseña',
            link: `perfil/contrasena`,
        },
    ],
    coberturasMedicas: [
        {
            Icono: BsPostcardHeart,
            titulo: 'Prepagas',
            link: `perfil/prepagas`,
        },
        {
            Icono: MdGroups2,
            titulo: 'Obras sociales',
            link: `perfil/obras-sociales`,
        },
    ],
    sesion: [
        {
            Icono: BiSolidPlaneAlt,
            titulo: 'Licencia',
            link: `perfil/licencia`,
        },
        {
            Icono: IoMdNotificationsOutline,
            titulo: 'Notificaciones',
            link: `perfil/notificacion`,
        },
    ],
}
