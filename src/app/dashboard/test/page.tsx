import SearchVideos from '@/components/search-tutovideos'

export default function TestPage() {
    return (
        <div className='min-h-screen flex flex-col gap-4 items-center justify-start'>
            <p className='mb-4'>Pagina de pruebas</p>
            <SearchVideos />
        </div>
    )
}
