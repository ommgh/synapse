import { lexend, poppins } from '@/lib/fonts'
import Image from 'next/image'
import { Fade, Slide } from 'react-awesome-reveal'

const About = () => {
    return (
        <div
            className={`relative flex flex-col min-h-screen py-[50px] px-[70px] max-[1030px]:px-0 w-screen justify-center items-center ${poppins.className}`}
            id="about-us"
        >
            <Slide direction="left" triggerOnce className="w-full">
                <p className="text-left text-5xl my-[30px] font-bold tracking-wider max-[1030px]:text-4xl max-[1030px]:m-[20px] max-[650px]:text-3xl">
                    We empower your digital future &#46;&#46;&#46;
                </p>
            </Slide>

            <Fade direction="left" triggerOnce delay={1000}>
                <div className='w-[1047px] h-[525px] mt-[30px] max-[1070px]:w-full max-[1070px]:h-fit max-[1070px]:p-3'>
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                        <Image
                            src={
                                'https://res.cloudinary.com/db7nrltsv/image/upload/v1690539429/pexels-mikael-blomkvist-6476260_e6qi3c.jpg'
                            }
                            width={1047}
                            height={525}
                            alt="team"
                        />
                    </div>
                </div>
            </Fade>

            <Fade delay={500} triggerOnce>
                <div className="absolute top-[425px] -left-[275px] translate-x-1/2 translate-y-1/3 ml-[30px] p-5 w-[650px] h-[350px] bg-[#000] text-white flex flex-col gap-[15px] rounded-xl max-[1260px]:relative max-[1260px]:top-0 max-[1260px]:left-0 max-[1260px]:translate-x-0 max-[1260px]:translate-y-0 max-[1260px]:m-[30px] max-[700px]:w-fit max-[700px]:h-fit">
                    <p
                        className={`text-4xl font-semibold leading-10 tracking-wide ${lexend.className}`}
                    >
                        Why We Do This
                    </p>

                    <p className="text-xl leading-7 tracking-wide">
                        At our core, we believe that the digital landscape is
                        ever-evolving and presents boundless opportunities for
                        businesses and individuals alike. We are passionate
                        about embracing the dynamic nature of technology and
                        harnessing its potential to transform lives and elevate
                        businesses to new heights. Our drive stems from the
                        desire to empower our clients with cutting-edge
                        solutions that bridge the gap between innovation and
                        success.
                    </p>
                </div>
            </Fade>

            <Fade direction="right" delay={1000} triggerOnce>
                <div className="relative w-[600px] h-[350px] ml-[700px] mt-[120px] p-5 flex flex-col items-end gap-[15px] max-[1260px]:my-[20px] max-[1260px]:mx-[3px] max-[700px]:w-fit max-[700px]:h-fit max-[700px]:items-center">
                    <p
                        className={`w-full text-4xl text-right font-semibold leading-10 tracking-wide ${lexend.className}`}
                    >
                        Our Mission
                    </p>

                    <p className="w-[525px] text-justify text-xl leading-7 tracking-wide max-[700px]:w-auto">
                        Our mission is to be the catalyst that propels our
                        clients forward in the digital realm. Through our
                        expertise in web development, app development, and UI/UX
                        design, we strive to deliver tailor-made solutions that
                        captivate audiences, streamline processes, and unlock
                        growth. We are committed to staying at the forefront of
                        new and secure technologies, ensuring that our clients
                        remain competitive and future-ready.
                    </p>
                </div>
            </Fade>

            <Fade direction="up" triggerOnce delay={1000}>
                <div className="w-[1200px] py-9 px-8 mt-[85px] mb-[30px] flex flex-col items-center gap-[25px] rounded-2xl bg-[#000] outline outline-4 outline-black border-4 border-black text-white max-[1260px]:w-auto max-[1260px]:m-[20px] max-[1260px]:py-4 max-[1260px]:px-[10px]">
                    <p
                        className={`text-4xl text-center font-semibold leading-10 tracking-wide ${lexend.className}`}
                    >
                        Vision
                    </p>

                    <p className="text-center text-xl leading-7 tracking-wide max-[700px]:text-justify">
                        At Synapse, we envision a world where technology is an
                        enabler of progress rather than a barrier. We aim to be
                        the leading force in shaping this reality by fostering a
                        collaborative ecosystem that thrives on innovation,
                        creativity, and reliability. Our vision is to be the
                        go-to partner for businesses seeking transformative
                        digital experiences, allowing them to redefine their
                        industries and forge lasting connections with their
                        customers.
                        <br /> <br />
                        Through our unwavering dedication to exceptional
                        quality, client-centric focus, and an agile approach, we
                        aspire to be the trusted companions on our clients&apos;
                        digital journeys. Together, we will build a future where
                        limitless possibilities await, and where success knows
                        no bounds.
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default About
