import SearchVideos from '@/components/search-tutovideos'

export default function TutorialesPage() {
    return (
        <div className='max-w-3xl mx-auto md:mx-0 p-4'>
            <div className='mb-6'>
                <h1 className='text-2xl font-bold text-center md:text-left  mb-2'>Tutoriales Médicos</h1>
                <p className='text-center text-gray-600'>
                    Encuentra tutoriales en video que te guiarán paso a paso en diversas prácticas médicas. Selecciona
                    una opción del menú para ver los videos tutoriales disponibles.
                </p>
            </div>
            <div className='mb-4'>
                <SearchVideos />
            </div>
            <div className='bg-purple-50 border-l-4 border-purple-500 p-4'>
                <h2 className='text-xl font-semibold text-purple-900'>¿Por qué es importante seguir los tutoriales?</h2>
                <p className='text-purple-700'>
                    Los tutoriales están diseñados para ayudarte a comprender y realizar correctamente diversas
                    prácticas médicas. Seguir las instrucciones correctamente puede mejorar tu salud y evitar
                    complicaciones.
                </p>
            </div>
        </div>
    )
}
