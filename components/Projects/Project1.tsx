import { Lexend_Deca } from 'next/font/google'

const lexend = Lexend_Deca({
    subsets: ['latin'],
    weight: '400'
})

const Project1 = () => {
    return (
        <div
        className="w-screen h-screen flex flex-row justify-center items-center bg-[#031226] text-white"
        >
            <div
            className="h-screen w-1/2 flex flex-col justify-center items-center gap-[30px]"
            >
                <h1
                className={`font-bold text-[69px] leading-[112px] tracking-[8px] uppercase ${lexend.className}`}
                >Project 1</h1>

                <p
                className='text-xl font-light text-center tracking-[1.2px] w-3/4'
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>

                <button
                className={`bg-white/[.23] tracking-[8.4px] font-semibold text-xl text-center px-[40px] py-[20px] mt-[20px] ${lexend.className}`}
                >DIVE IN? &gt;</button>
            </div>

            <div
            className='h-screen w-1/2 bg-center bg-cover bg-[url(/images/project1.png)] bg-no-repeat'
            ></div>
        </div>
    )
}

export default Project1