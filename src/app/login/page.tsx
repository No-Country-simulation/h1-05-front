import LoginForm from '@/components/form-login'
import LogoVertical from '@/components/logo-vertical'

export default function LoginPage() {
    return (
        <div className='flex flex-col items-center justify-center p-6 mx-auto lg:py-0'>
            <div className='w-full mt-10 flex flex-col items-center gap-10'>
                <LogoVertical />
                <div className='w-full max-w-md'>
                    <div className='p-7 space-y-5'>
                        <h2 className='text-xl font-semibold text-center'>Ingresá a Justina.io</h2>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
