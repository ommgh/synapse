import Loader from '@/components/Loader'
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Synapse',
    description: 'Transforming Visions into Reality, One Project at a Time',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>
                <Suspense fallback={<Loader />}>{children}</Suspense>
            </body>
        </html>
    )
}
