"use client";

import FormPage from "@/components/FormPage";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <FormPage />
        </main>
    )
}