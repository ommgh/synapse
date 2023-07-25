import { lexend, poppins } from "@/lib/fonts"
import Image from "next/image"
import { Fade, Flip, Slide } from "react-awesome-reveal"

const About = () => {
    return (
        <div
        className={`flex flex-col min-h-screen py-[50px] px-[70px] w-screen justify-center items-center ${poppins.className}`}
        >
            <Slide
            direction="left"
            triggerOnce
            className='w-full text-[36px] my-[30px] font-bold tracking-wider'
            >We empower your digital future ...</Slide>

            <Fade
            direction="left"
            triggerOnce
            className="relative w-[1047px] h-[525px] mt-[30px] bg-[url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg)] bg-center bg-no-repeat bg-cover"
            >
                <div
                className="absolute top-1/2 -left-1/2 translate-x-1/2 translate-y-1/3 ml-[30px] p-5 w-[650px] h-[350px] bg-[#000] text-white flex flex-col gap-[15px] rounded-xl border-2 border-black"
                >
                    <p
                    className={`text-3xl font-semibold leading-10 tracking-wide ${lexend.className}`}
                    >Why We Do This:</p>

                    <p className='text-xl font-medium leading-7 tracking-wide'>
                        At our core, we believe that the digital landscape is ever-evolving and presents boundless opportunities for businesses and individuals alike. We are passionate about embracing the dynamic nature of technology and harnessing its potential to transform lives and elevate businesses to new heights. Our drive stems from the desire to empower our clients with cutting-edge solutions that bridge the gap between innovation and success.
                    </p>
                </div>
            </Fade>

            <Fade
            direction="right"
            delay={1000}
            triggerOnce>
                <div
                className="relative w-[600px] h-[350px] ml-[700px] mt-[120px] p-5 flex flex-col items-end gap-[15px]"
                >
                    {/* <div
                    className="absolute right-0 mt-[-120px] z-[-1]"
                    >
                        <Image
                        src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690277403/Untitled_design_8_afkpgk.png'}
                        width={150}
                        height={150}
                        alt="abstract design"
                        />
                    </div> */}

                    <p className={`text-3xl text-right font-semibold leading-10 tracking-wide ${lexend.className}`}>
                        Our Mission
                    </p>

                    <p
                    className='w-[525px] text-justify text-[20px] font-medium leading-7 tracking-wide'
                    >
                        Our mission is to be the catalyst that propels our clients forward in the digital realm. Through our expertise in web development, app development, and UI/UX design, we strive to deliver tailor-made solutions that captivate audiences, streamline processes, and unlock growth. We are committed to staying at the forefront of new and secure technologies, ensuring that our clients remain competitive and future-ready.
                    </p>
                </div>
            </Fade>

            <Flip
            direction="horizontal"
            >            
                <div
                className="w-[1200px] py-9 px-8 mt-[85px] mb-[30px] flex flex-col items-center gap-[25px] rounded-2xl bg-[#000] outline outline-4 outline-black border-4 border-white text-white"
                >
                    <p className={`text-3xl text-center font-semibold leading-10 tracking-wide ${lexend.className}`}>
                        Vision
                    </p>

                    <p
                    className='text-center text-xl leading-7 tracking-wide'
                    >
                        At Synapse, we envision a world where technology is an enabler of progress rather than a barrier. We aim to be the leading force in shaping this reality by fostering a collaborative ecosystem that thrives on innovation, creativity, and reliability. Our vision is to be the go-to partner for businesses seeking transformative digital experiences, allowing them to redefine their industries and forge lasting connections with their customers.
                        <br/> <br/>
                        Through our unwavering dedication to exceptional quality, client-centric focus, and an agile approach, we aspire to be the trusted companions on our clients' digital journeys. Together, we will build a future where limitless possibilities await, and where success knows no bounds.
                    </p>
                </div>
            </Flip>
        </div>
    )
}

export default About