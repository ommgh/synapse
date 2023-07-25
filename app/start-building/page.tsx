"use client";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import { lexend } from "@/lib/fonts";

export default function Page() {
    return (
        <div
        className="w-screen h-screen overflow-x-hidden"
        >
            <Navbar />

            <div
            className="w-screen min-h-screen p-[80px]"
            >
                <h1
                className={`w-full text-center text-5xl my-[30px] ${lexend.className}`}
                >Start building with us</h1>
                <Form />
            </div>

            <Footer />
        </div>
    )
}