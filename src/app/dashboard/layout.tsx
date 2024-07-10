import MenuDoctor from '@/components/doctor/menu-doctor'

export default function LayoutDashboardMedical({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <MenuDoctor />
            {children}
        </div>
    )
}
