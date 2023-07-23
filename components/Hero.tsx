import { poppins } from "@/lib/fonts"

const Hero = () => {
    return (
        <div
        className="relative h-screen w-screen flex flex-col justify-center items-center pt-[60px] select-none"
        >
            <div
            className="flex flex-col justify-center items-center gap-[30px]"
            >
                <h1
                className="anuratiFont w-[1008px] text-center text-[124px] mt-[50px] mb-[-30px] font-normal uppercase tracking-widest"
                >SYNAPSE</h1>

                <p
                className={`w-[828.27px] text-center text-[22px] font-semibold mb-[30px] ${poppins.className}`}
                >Transforming Visions into Reality, One Project at a Time</p>

                <button
                className={`border-[3px] border-black rounded-lg px-7 py-4 mt-[50px] text-2xl text-white bg-[#000] ${poppins.className} hover:bg-[#fff] hover:text-[#000] hover:font-bold font-bold tracking-wide`}
                >
                    Start Building
                </button>
            </div>
        </div>
    )
}

export default Hero