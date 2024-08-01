import ChatBot from '@/components/chatbot'
import MenuPaciente from '@/components/paciente/menu-paciente'

export default function LayoutDashboardPatient({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen md:grid md:grid-cols-[1fr_3fr] md:gap-4 md:ml-4 md:pt-4 pb-24 sm:pb-3'>
            <MenuPaciente />
            <div>{children}</div>
            <ChatBot />
        </div>
    )
}
