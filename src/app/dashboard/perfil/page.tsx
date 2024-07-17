import HeaderPerfilDoctor from '@/components/doctor/header-perfil'
// Datos de prueba
import { medico } from '@/constants/demo-medico'
import CerrarSesion from '@/components/cerrar-sesion'
export default async function PerfilPage() {
    return (
        <div className='min-h-screen'>
            <HeaderPerfilDoctor medico={medico} />
            <div className='flex flex-col items-center'>
                <h2>Pagina del perfil</h2>
                <CerrarSesion />
            </div>
        </div>
    )
}
