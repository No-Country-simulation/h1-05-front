import ChatBot from '@/components/chatbot'
import SearchVideos from '@/components/search-tutovideos'

export default function TestPage() {
    return (
        <div className='min-h-screen space-y-4 pb-32'>
            <p className='mb-4 font-bold text-center text-xl'>Pagina de pruebas</p>
            <ChatBot />
        </div>
    )
}
