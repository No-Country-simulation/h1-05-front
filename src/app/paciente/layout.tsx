import ChatBot from '@/components/chatbot'
import MenuPaciente from '@/components/paciente/menu-paciente'
import { ScrollShadow } from '@nextui-org/react'

export default function LayoutDashboardPatient({ children }: { children: React.ReactNode }) {
    return (
        <div className='md:grid md:grid-cols-[1fr_3fr] md:gap-4 md:ml-4 md:pt-4 pb-24 sm:pb-3'>
            <MenuPaciente />
            <ScrollShadow size={10} hideScrollBar className='h-[calc(100vh-64px)] md:h-[calc(100vh-28px)]'>
                {children}
            </ScrollShadow>
            <ChatBot />
        </div>
    )
}
