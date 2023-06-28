import { lexend } from '@/lib/fonts'
import React from 'react'

const Team = () => {
    return (
        <div
        className="flex flex-col h-screen w-screen justify-center items-center bg-black/[0.9] text-white gap-[25px]"
        >
            <h3 
            className={`w-[726.67px] h-[86px] text-center text-white text-[69px] font-semibold uppercase leading-10 tracking-widest ${lexend.className}`}
            >Meet the team</h3>

            <p 
            className={`w-[904.55px] h-[77px] text-center text-white text-opacity-70 text-[24px] font-normal leading-10 tracking-widest ${lexend.className}`}
            >Get acquainted with our exceptional team of young visionaries, each driven by passion, expertise, and a commitment to excellence.</p>
        </div>
    )
}

export default Team