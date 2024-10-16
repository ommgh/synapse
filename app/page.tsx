import { LandingPage } from '@/components/LandingPage'
import { Navbar } from '@/components/Navbar'

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <LandingPage />
        </main>
    )
}
