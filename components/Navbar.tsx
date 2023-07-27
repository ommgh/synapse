import { poppins } from '@/lib/fonts'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-[60px] w-screen flex z-[10] bg-[#fff] py-4 px-[25px] shadow-md">
            <Link href={'/'} className="anuratiFont text-xl">
                SYNAPSE
            </Link>

            <ul
                className={`absolute right-0 mr-4 px-[30px] flex justify-center items-center gap-[30px] ${poppins.className}`}
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
                    scroll={false}
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
        </div>
    )
}

export default Navbar
