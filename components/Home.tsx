'use client'

import { poppins } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'

export const Home = () => {
    return (
        <div
            className="relative h-screen w-screen flex flex-col justify-center items-center pt-[60px] select-none"
            id="home"
        >
            <Fade
                direction="left"
                className="absolute left-0 w-[350px] h-[350px] max-[1100px]:hidden"
            >
                <Image
                    src={'/images/scribble-triangle.png'}
                    width={350}
                    height={350}
                    alt="doodle triangle"
                    className="absolute left-[-150px] max-[1235px]:scale-[0.8] select-none"
                />
            </Fade>

            <Fade
                direction="right"
                cascade
                delay={500}
                className="absolute top-[150px] left-[75%] w-[350px] h-[350px] max-[1450px]:left-[70%] max-[1235px]:left-[65%] max-[1100px]:hidden"
            >
                <Image
                    src={'/images/scribble-square.png'}
                    width={250}
                    height={250}
                    alt="doodle square"
                    className="absolute right-[-150px] rotate-[30deg] max-[1235px]:scale-[0.8] select-none"
                />

                <Image
                    src={'/images/doodle-circle.png'}
                    width={100}
                    height={100}
                    alt="doodle cicle"
                    className="absolute top-[300px] right-[-70px] rotate-[30deg] max-[1235px]:scale-[0.8] select-none"
                />
            </Fade>

            <AttentionSeeker delay={750} effect="tada">
                <Image
                    src={'/images/scribble-rays.png'}
                    width={100}
                    height={100}
                    alt="doodle ray"
                    className="min-[1100px]:hidden rotate-[-60deg] mt-[-30px] select-none"
                />
            </AttentionSeeker>

            <Fade
                cascade
                direction="up"
                triggerOnce
                delay={1500}
                className="flex flex-col justify-center items-center gap-[30px] "
            >
                <div className="anuratiFont w-[1008px] text-center text-[124px] mt-[50px] mb-[-30px] font-normal uppercase tracking-widest max-[800px]:text-[80px] max-[800px]:w-auto max-[500px]:text-[45px]">
                    SYNAPSE
                </div>

                <p
                    className={`w-[828.27px] text-center text-[22px] font-semibold mb-[120px] max-[800px]:text-xl max-[800px]:w-auto max-[800px]:mt-[30px] max-[500px]:text-base max-[550px]:w-4/5 ${poppins.className}`}
                >
                    Transforming Visions into Reality, One Project at a Time
                </p>

                <AttentionSeeker effect="pulse" delay={3500} triggerOnce>
                    <Link
                        href={'/start-building'}
                        className={`border-[3px] border-black rounded-lg px-7 py-4 text-2xl text-white bg-[#000] ${poppins.className} hover:bg-[#fff] hover:text-[#000] hover:font-bold font-bold tracking-wide max-[550px]:text-lg`}
                    >
                        Start Building
                    </Link>
                </AttentionSeeker>
            </Fade>
        </div>
    )
}
