import { lexend } from "@/lib/fonts"

const Tagline = () => {
    return (
        <div
        className="relative w-screen h-[110vh] flex flex-col justify-start items-center bg-[#031226] text-white"
        >
            <div
            className='flex flex-col justify-center items-center w-4/6 gap-[48px] mt-[180px]'
            >
                <p
                className="anuratiFont w-[173.53px] h-[26px] text-center text-white text-[21px] font-normal uppercase leading-10 tracking-widest"
                >SYNAPSE</p>

                <h2
                className={`w-[938px] h-[56px] text-center text-white text-[69px] font-semibold uppercase leading-10 tracking-widest ${lexend.className}`}
                >Innovative Cohort</h2>

                <p
                className='w-[962px] h-[77px] text-center text-white text-opacity-80 text-[24px] font-medium leading-10 tracking-widest'
                >Where talented college students unite, leveraging cutting-edge tech stacks to deliver innovative solutions, showcasing their boundless potential.</p>
            </div>

            <button
            className='absolute bottom-0 mb-[90px] w-[70px] h-[82px] flex items-center justify-center bg-center bg-contain bg-[url(/images/downBtn.png)] bg-no-repeat'
            aria-label="Down"
            >
                <div
                className='w-[23px] h-[12px] bg-center bg-contain bg-[url(/images/down.png)] bg-no-repeat'
                ></div>
            </button>
        </div>
    )
}

export default Tagline