import FormRegistrationMedication from '@/components/doctor/form-registrar-medicacion/form-registration-medication'

// import CerrarSesion from '@/components/cerrar-sesion'
export default async function RegistrarMedicacion() {
    console.log('regresamos a registro medicación')
    return (
        <div className='min-h-screen max-w-md mx-auto pb-[90px]'>
            <FormRegistrationMedication />
        </div>
    )
}
