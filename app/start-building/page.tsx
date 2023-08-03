'use client'

import { FormPage } from '@/components/form-page'
import { Navbar } from '@/components/navbar'

export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <FormPage />
        </main>
    )
}
