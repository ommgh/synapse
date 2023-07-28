import { poppins } from '@/lib/fonts'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
                <title>Synapse</title>
                <meta
                    name="description"
                    content="Agency Synapse: Transforming Visions into Reality, One Project at a Time"
                    key="desc"
                />
            </head>
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
