import { SubmissionPage } from '@/components/SubmissionPage'
import { Navbar } from '@/components/Navbar'

export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <SubmissionPage />
        </main>
    )
}
