import { poppins } from "@/lib/fonts"
import Image from "next/image"
import { Fade, Bounce } from "react-awesome-reveal"
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
            {/* <Fade direction="left"
            className="absolute left-0 w-[350px] h-[350px]"
            >
                <Image 
                src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690231624/Untitled_design_5_psfews.png"}
                width={350}
                height={350}
                alt="doodle triangle"
                className="absolute left-[-150px]"
                />
            </Fade>

            <Fade direction="right"
            className="absolute w-[350px] h-[350px] border-2 border-black"
            >
                <Image 
                src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690233747/Untitled_design_7_k7g3vx.png"}
                width={350}
                height={350}
                alt="doodle triangle"
                className="absolute right-[-150px] border-2 border-black"
                />
            </Fade> */}

            <div
            className="flex flex-col justify-center items-center gap-[30px]"
            >
                <Fade
                className="anuratiFont w-[1008px] text-center text-[124px] mt-[-30px] mb-[-30px] font-normal uppercase tracking-widest"
                direction="up"
                triggerOnce
                >SYNAPSE</Fade>

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