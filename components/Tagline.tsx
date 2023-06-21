import { lexend } from "@/lib/fonts"

const Tagline = () => {
    return (
        <div
        className="relative w-screen h-screen flex flex-col justify-center items-center bg-[#031226] text-white"
        >
            <div
            className='flex flex-col justify-center items-center w-4/6 gap-[28px]'
            >
                <p
                className="anuratiFont text-xl"
                >SYNAPSE</p>

                <h2
                className={`font-bold text-[69px] leading-[112px] tracking-[8.4px] uppercase ${lexend.className}`}
                >Innovative Cohort</h2>

                <p
                className='text-xl text-center'
                >Where talented college students unite, leveraging cutting-edge tech stacks to deliver innovative solutions, showcasing their boundless potential.</p>
            </div>

            <button
            className='absolute bottom-0 mb-[20px] w-[70px] h-[82px] flex items-center justify-center bg-center bg-contain bg-[url(/images/downBtn.png)] bg-no-repeat'
            >
                <div
                className='w-[23px] h-[12px] bg-center bg-contain bg-[url(/images/down.png)] bg-no-repeat'
                ></div>
            </button>
        </div>
    )
}

export default Tagline