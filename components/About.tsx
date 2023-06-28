import { lexend } from "@/lib/fonts"

const About = () => {
    return (
        <div
        className="flex flex-col h-[110vh] w-screen justify-center items-center bg-black/[0.9] text-white gap-[45px]"
        >
            <p
            className={`w-[288.93px] h-[26px] text-center text-white text-[21px] font-semibold uppercase tracking-widest ${lexend.className}`}
            >ABOUT US?</p>
            <h1
            className={`w-[1278px] h-[86px] text-center text-white text-[69px] font-semibold uppercase tracking-widest ${lexend.className}`}
            >Dynamic Collaborators</h1>

            <p
            className="w-[908.56px] h-auto text-center text-white text-opacity-90 text-[24px] font-light leading-10 tracking-widest"
            >Dynamic Collaborators harnessing fresh talent and agile expertise to deliver innovative solutions, fostering client success and growth.</p>
        </div>
    )
}

export default About