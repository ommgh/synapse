import './globals.css'
import { Inter } from 'next/font/google'

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
        <link rel='icon' href='https://res.cloudinary.com/db7nrltsv/image/upload/v1687344280/synapse-brain_cibck9.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
