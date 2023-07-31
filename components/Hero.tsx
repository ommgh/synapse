import { poppins } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'

const Hero = () => {
    return (
        <div
            className="relative h-screen w-screen flex flex-col justify-center border-2 border-black items-center pt-[60px] select-none"
            id="home"
        >
            <Fade
                direction="left"
                className="absolute left-0 w-[350px] h-[350px] max-[1100px]:hidden"
            >
                <Image
                    src={
                        'https://res.cloudinary.com/db7nrltsv/image/upload/v1690231624/Untitled_design_5_psfews.png'
                    }
                    width={350}
                    height={350}
                    alt="doodle triangle"
                    className="absolute left-[-150px] max-[1235px]:scale-[0.8]"
                />
            </Fade>

            <Fade
                direction="right"
                cascade
                delay={500}
                className="absolute top-[150px] left-[75%] w-[350px] h-[350px] border-2 border-black max-[1450px]:left-[70%] max-[1235px]:left-[65%] max-[1100px]:hidden"
            >
                <Image
                    src={
                        'https://res.cloudinary.com/db7nrltsv/image/upload/v1690233747/Untitled_design_7_k7g3vx.png'
                    }
                    width={250}
                    height={250}
                    alt="doodle triangle"
                    className="absolute right-[-150px] rotate-[30deg] max-[1235px]:scale-[0.8]"
                />

                <Image
                    src={
                        'https://res.cloudinary.com/db7nrltsv/image/upload/v1690295351/Untitled_design_12_jknmkm.png'
                    }
                    width={100}
                    height={100}
                    alt="doodle triangle"
                    className="absolute top-[300px] right-[-70px] rotate-[30deg] max-[1235px]:scale-[0.8]"
                />
            </Fade>

            <AttentionSeeker delay={750} effect='tada'>
                <Image
                src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690380185/Untitled_design_6_ldp5fj.png'}
                width={100}
                height={100}
                alt='doodle ray'
                className='min-[1100px]:hidden rotate-[-60deg] mt-[-30px]'
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

export default Hero
