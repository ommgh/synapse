import { poppins } from "@/lib/fonts"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { Zoom } from "react-awesome-reveal"

interface ShowSideNav {
    setShowSideNav: Dispatch<SetStateAction<boolean>>
}

export const SideNavbar = ({ setShowSideNav }: ShowSideNav) => {
    return (
        <Zoom direction="left" className="fixed top-0 left-0">
            <div
            className="w-screen h-screen z-[20] bg-white flex flex-col items-center justify-center"
            >
                <button 
                className="absolute top-0 left-0 p-4"
                onClick={() => setShowSideNav(false)}
                >close</button>

                <div
                    className={`px-[30px] flex flex-col text-3xl font-semibold justify-center items-center gap-[50px] ${poppins.className}`}
                >
                    <Link
                        href={'/'}
                        onClick={() => setShowSideNav(false)}
                        className="hover:font-bold"
                    >
                        Home
                    </Link>

                    <Link
                        href={'/#about-us'}
                        onClick={() => setShowSideNav(false)}
                        className="hover:font-bold"
                    >
                        About Us
                    </Link>

                    <Link
                        href={'/#services'}
                        onClick={() => setShowSideNav(false)}
                        className="hover:font-bold"
                    >
                        Services
                    </Link>

                    <Link
                        href={'/#projects'}
                        onClick={() => setShowSideNav(false)}
                        className="hover:font-bold"
                    >
                        Projects
                    </Link>
                </div>

                <span className="anuratiFont absolute bottom-[70px] text-md select-none">SYNAPSE</span>
            </div>
        </Zoom>
    )
}