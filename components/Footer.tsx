import { lexend, poppins } from "@/lib/fonts"
import Link from "next/link"

const Footer = () => {
    return (
        <div
        className={`relative flex h-auto py-[50px] px-[70px] w-screen bg-black text-white ${poppins.className}`}
        >
            <div
            className="flex flex-col items-center m-[20px] ml-0"
            >
                <p
                className="anuratiFont text-[44px] tracking-wider"
                >SYNAPSE</p>

                <p
                className="tracking-wider text-lg"
                >Service Provider</p>
            </div>
            
            <div
            className="flex flex-col items-center m-[20px]"
            >
                <p>Get in touch</p>
                <ul
                className="flex flex-col"
                >
                    <Link href={'/'}>LinkedIn</Link>
                    <Link href={'/'}>Twitter</Link>
                    <Link href={'/'}>Start Building</Link>
                </ul>
            </div>

            <div
            className="flex flex-col items-center m-[20px]"
            >
                <p>References</p>
                <ul
                className="flex flex-col"
                >
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Services</Link>
                    <Link href={'/'}>Github</Link>
                </ul>
            </div>

            <p
            className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[20px]"
            >All rights reserved</p>
        </div>
    )
}

export default Footer