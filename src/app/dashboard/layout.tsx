import MenuDoctor from '@/components/doctor/menu-doctor'

export default function LayoutDashboardMedical({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen md:grid md:grid-cols-[1fr_3fr] md:gap-4 md:ml-4 md:pt-4'>
            <MenuDoctor />
            <div>{children}</div>
        </div>
    )
}
