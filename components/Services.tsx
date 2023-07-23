import { poppins } from "@/lib/fonts"

const Services = () => {
    return (
        <div
        className={`flex flex-col min-h-screen py-[50px] px-[70px] w-screen justify-center items-center ${poppins.className}`}
        >
            <p
            className="text-[62px] text-center tracking-widest leading-[78px] my-[50px]"
            >For all the services you <br/> need right in your <br/> product</p>

            <div className="relative w-full min-h-[900px] p-[60px]">
                <div
                className="absolute left-[300px] w-[300px] h-[375px] border-4 border-black rounded-xl -rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest"
                >WEB APP</div>

                <div
                className="absolute left-[900px] top-[450px] w-[300px] h-[375px] border-4 border-black rounded-xl rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest"
                >UI / UX</div>
            </div>
        </div>
    )
}

export default Services