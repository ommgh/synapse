'use client'

import { poppins } from '@/lib/fonts'
import Link from 'next/link'
import { SideNavbar } from './SideNavbar'
import { useState } from 'react'
import Image from 'next/image'

export const Navbar = () => {
    const [showSideNav, setShowSideNav] = useState<boolean>(false)

    return (
        <div className="fixed top-0 left-0 h-[60px] w-screen flex justify-between items-center z-[10] bg-[#fff] py-4 px-[25px] shadow-md">
            <Link href={'/'} className="anuratiFont text-xl">
                SYNAPSE
            </Link>

            <ul
                className={`px-[30px] flex justify-center items-center gap-[30px] max-[650px]:hidden ${poppins.className}`}
            >
                <Link
                    href={'/'}
                    className="text-lg font-medium hover:font-semibold"
                >
                    Home
                </Link>

                <Link
                    href={'/#about-us'}
                    className="text-lg font-medium hover:font-semibold"
                >
                    About Us
                </Link>

                <Link
                    href={'/#services'}
                    className="text-lg font-medium hover:font-semibold"
                >
                    Services
                </Link>

                <Link
                    href={'/#projects'}
                    className="text-lg font-medium hover:font-semibold"
                >
                    Projects
                </Link>
            </ul>

            <button
                className="min-[650px]:hidden select-none"
                onClick={() => setShowSideNav(true)}
            >
                <Image
                    width="24"
                    height="24"
                    src="/images/menu.png"
                    alt="menu"
                />
            </button>

            {showSideNav && <SideNavbar {...{ setShowSideNav }} />}
        </div>
    )
}
