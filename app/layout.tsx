import { poppins } from '@/lib/fonts'
import './globals.css'

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
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
