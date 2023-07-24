import { poppins } from "@/lib/fonts"
// import { illustrations } from "@/lib/data"
// import Image from "next/image"

interface Illustrations {
    id: number,
    url: string
}

const Hero = () => {
    return (
        <div
        className="relative h-screen w-screen flex flex-col justify-center items-center pt-[60px] select-none"
        >
            <div
            className="flex flex-col justify-center items-center gap-[30px]"
            >
                <h1
                className="anuratiFont w-[1008px] text-center text-[124px] mt-[-30px] mb-[-30px] font-normal uppercase tracking-widest"
                >SYNAPSE</h1>

                <p
                className={`w-[828.27px] text-center text-[22px] font-semibold mb-[30px] ${poppins.className}`}
                >Transforming Visions into Reality, One Project at a Time</p>

                <button
                className={`border-[3px] border-black rounded-lg px-7 py-4 mt-[0px] text-2xl text-white bg-[#000] ${poppins.className} hover:bg-[#fff] hover:text-[#000] hover:font-bold font-bold tracking-wide`}
                >
                    Start Building
                </button>
            </div>

            {/* <div
            className=" w-screen flex justify-center items-center my-[50px] z-[-1]"
            >
                {illustrations.map((values: Illustrations, id: number) => (
                    <>
                        {id==4 && 
                                <div
                                className="w-[240px] h-[150px] "
                                >&nbsp;</div>
                            }
                        <div
                        className={` w-[300px] h-[275px] flex justify-center items-center border-2 border-black z-[-1]`}
                        key={id}
                        >
                            <Image 
                            src={values.url}
                            alt="illustrations"
                            width={300}
                            height={300}
                            className={id >= 4 ? "transform -scale-x-100 ": "border-2 border-black"}
                            />
                        </div>
                    </>
                ))}
            </div> */}
        </div>
    )
}

export default Hero