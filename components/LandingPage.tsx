import { poppins } from "@/lib/fonts"

const LandingPage = () => {
    return (
        <div
        className="relative flex flex-col h-screen w-screen justify-center items-center"
        >
            <div
            className="absolute top-0 left-0 w-screen h-screen bg-cover bg-[url(/images/bg.png)] bg-no-repeat"
            ></div>

            <div
            className="absolute w-full h-full bg-center bg-contain bg-[url(/images/box.png)] bg-no-repeat"
            ></div>

            <div
            className="z-[1] text-white flex flex-col justify-center items-center"
            >
                <h1
                className="mainFont mb-14"
                >SYNAPSE</h1>

                <p
                className={`font-medium text-[22px] leading-8 ${poppins.className}`}
                >Transforming Visions into Reality, One Project at a Time</p>
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

export default LandingPage