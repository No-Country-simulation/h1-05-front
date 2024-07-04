import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Justina.io',
    description: 'Una revolución en app entre médicos, pacientes y donantes',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='es'>
            <body className={`${inter.className} bg-slate-50`}>
                <NextUIProvider>
                    <main>{children}</main>
                </NextUIProvider>
            </body>
        </html>
    )
}
