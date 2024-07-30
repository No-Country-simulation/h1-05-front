import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'sonner'
import Link from 'next/link'
import Head from 'next/head'
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
            {/* <Head>
                <Link href='https://cdn.userway.org/widget.js' data-account='Y4t2yj84V9' />
            </Head> */}
            <body className={`${inter.className}`}>
                <main>
                    <NextUIProvider>{children}</NextUIProvider>
                    <Toaster position='bottom-center' />
                </main>
            </body>
        </html>
    )
}
