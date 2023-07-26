import { lexend, poppins } from "@/lib/fonts"
import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const Footer = () => {
    return (
        <footer>
            <Fade
            direction="up"
            triggerOnce
            delay={1000}
            className="w-full h-fit flex items-center"
            >
                <Image
                src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690291745/Untitled_design_10_if49qd.png'}
                width={1980}
                height={350}
                alt="synapse team"
                />
            </Fade>

            <div
            className={`relative flex justify-between h-auto py-[50px] px-[70px] w-screen bg-black text-white ${poppins.className}`}
            >
                <div
                className="flex flex-col items-center m-[20px] ml-0"
                >
                    <p
                    className="anuratiFont text-[44px] tracking-wider"
                    >SYNAPSE</p>

                    <p
                    className="tracking-wider text-lg mb-[20px]"
                    >Service Provider</p>

                    <p
                    className="tracking-wider text-lg"
                    >contact@agencysynapse.com</p>
                </div>

                <div
                className="flex justify-center items-start gap-[50px] mb-[20px]"
                >                
                    <div
                    className="flex flex-col items-start mx-[20px]"
                    >
                        <p
                        className="text-xl font-semibold tracking-wide my-[10px]"
                        >Get in touch</p>

                        <ul
                        className="flex flex-col tracking-wide text-lg"
                        >
                            <Link href={'/'}
                            className="hover:font-semibold"
                            >LinkedIn</Link>

                            <Link href={'/'}
                            className="hover:font-semibold"
                            >Twitter</Link>

                            <Link href={'/start-building'} 
                            className="hover:font-semibold"
                            >Start Building</Link>
                        </ul>
                    </div>

                    <div
                    className="flex flex-col items-start mx-[20px]"
                    >
                        <p
                        className="text-xl font-semibold tracking-wide my-[10px]"
                        >References</p>

                        <ul
                        className="flex flex-col tracking-wide text-lg"
                        >
                            <Link href={'/'}
                            className="hover:font-semibold"
                            >Home</Link>

                            <Link href={'/#about-us'}
                            className="hover:font-semibold"
                            >About Us</Link>

                            <Link href={'/#services'}
                            className="hover:font-semibold"
                            >Services</Link>

                            <Link href={'/#projects'}
                            className="hover:font-semibold"
                            >Projects</Link>

                            <Link href={'https://github.com/AgencySynapse'}
                            target="_blank"
                            className="hover:font-semibold"
                            >Github</Link>

                        </ul>
                    </div>
                </div>

                <p
                className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[20px]"
                >&copy; All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer