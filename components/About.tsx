import { lexend } from "@/lib/fonts"

const About = () => {
    return (
        <div
        className="flex flex-col h-screen w-screen justify-center items-center bg-black/[0.9] text-white gap-[25px]"
        >
            <p
            className={`text-xl tracking-[8px] font-medium ${lexend.className}`}
            >ABOUT US?</p>

            <h1
            className={`font-bold text-[69px] leading-[112px] tracking-[8px] uppercase ${lexend.className}`}
            >Dynamic Collaborators</h1>

            <p
            className="font-light text-xl text-center tracking-[1.2px] w-3/6"
            >Dynamic Collaborators harnessing fresh talent and agile expertise to deliver innovative solutions, fostering client success and growth.</p>
        </div>
    )
}

export default About