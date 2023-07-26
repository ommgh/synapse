import { poppins } from "@/lib/fonts"
import Image from "next/image"
import Link from "next/link"
import { Fade, AttentionSeeker } from "react-awesome-reveal"

const Hero = () => {
    return (
        <div
        className="relative h-screen w-screen flex flex-col justify-center items-center pt-[60px] select-none"
        id="home"
        >
            <Fade direction="left"
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
            cascade
            delay={500}
            className="absolute top-[150px] left-[75%] w-[350px] h-[350px]"
            >
                <Image 
                src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690233747/Untitled_design_7_k7g3vx.png"}
                width={250}
                height={250}
                alt="doodle triangle"
                className="absolute right-[-150px] rotate-[30deg]"
                />

                <Image 
                src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690295351/Untitled_design_12_jknmkm.png"}
                width={100}
                height={100}
                alt="doodle triangle"
                className="absolute top-[300px] right-[-70px] rotate-[30deg]"
                />
            </Fade>

            <Fade
            cascade
            direction="up"
            triggerOnce
            delay={1500}
            className="flex flex-col justify-center items-center gap-[30px]"
            >
                <div
                className="anuratiFont w-[1008px] text-center text-[124px] mt-[70px] mb-[-30px] font-normal uppercase tracking-widest"
                >SYNAPSE</div>

                <p
                className={`w-[828.27px] text-center text-[22px] font-semibold mb-[50px] ${poppins.className}`}
                >Transforming Visions into Reality, One Project at a Time</p>

                <AttentionSeeker
                effect="rubberBand"
                delay={3500}
                triggerOnce
                >
                    <Link
                    href={'/start-building'}
                    className={`border-[3px] border-black rounded-lg px-7 py-4 mt-[50px] text-2xl text-white bg-[#000] ${poppins.className} hover:bg-[#fff] hover:text-[#000] hover:font-bold font-bold tracking-wide`}
                    >
                        Start Building
                    </Link>
                </AttentionSeeker>
            </Fade>
        </div>
    )
}

export default Hero