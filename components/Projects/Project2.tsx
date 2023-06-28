import { lexend } from "@/lib/fonts"

const Project2 = () => {
    return (
        <div
        className="w-screen h-[110vh] flex flex-row justify-center items-center bg-[#031226] text-white"
        >
            <div
            className='h-[110vh] w-1/2 bg-center bg-cover bg-[url(/images/project2.png)] bg-no-repeat'
            ></div>

            <div
            className="h-screen w-1/2 flex flex-col justify-center items-center gap-[30px]"
            >
                <h1
                className={`w-[493.75px] h-[70px] text-center text-white text-[69px] font-semibold uppercase leading-10 tracking-widest ${lexend.className}`}
                >Project 2</h1>

                <p
                className='w-[650.62px] h-auto text-center text-white text-opacity-70 text-[24px] font-light leading-10 tracking-widest'
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>

                <button
                className={`w-[282px] h-[84px] pl-[50.39px] pr-[47.77px] bg-white bg-opacity-25 gap-[10.50px] flex justify-center items-center text-center text-white text-[21px] font-semibold uppercase leading-10 tracking-widest ${lexend.className}`}
                >&lt; DIVE IN?</button>
            </div>
        </div>
    )
}

export default Project2