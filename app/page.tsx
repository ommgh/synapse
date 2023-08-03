'use client'

import { LandingPage } from '@/components/main-container'
import { Navbar } from '@/components/navbar'

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <LandingPage />
        </main>
    )
}
