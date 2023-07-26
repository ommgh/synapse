import { lexend, poppins } from "@/lib/fonts"
import Image from "next/image";
import { useState } from "react";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";

const Services = () => {
    const [showWeb, setShowWeb] = useState(false);
    const [showUIUX, setShowUIUX] = useState(false);
    const [showApp, setShowApp] = useState(false);

    const hideAll = () => {
        setShowWeb(false);
        setShowUIUX(false);
        setShowApp(false);
    }
    
    return (
        <div
        className={`relative flex flex-col min-h-screen pt-[50px] px-[70px] w-screen justify-center items-center ${poppins.className}`}
        id="services"
        >
            <div
            className="absolute top-[70px] left-[150px] rotate-[20deg]"
            >
                <AttentionSeeker effect="wobble">
                    <Image
                    src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690373183/Untitled_design_14_wjye2i.png"}
                    width={150}
                    height={150}
                    alt="ray"
                    />
                </AttentionSeeker>
            </div>

            <Zoom
            triggerOnce
            duration={500}
            delay={500}
            ><p
            className="max-w-[881px] text-center text-6xl leading-[90px] font-semibold tracking-wider my-[90px]"
            >We provide all the services you need right in your product</p></Zoom>

            <div
            className="absolute top-[370px] right-[200px] rotate-[150deg] flex "
            >
                <AttentionSeeker cascade effect="heartBeat">
                    <Image
                    src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690373184/Untitled_design_16_tbyrqw.png"}
                    width={80}
                    height={80}
                    alt="ray"
                    className="rotate-[-20deg] mr-[10px]"
                    />
                    <Image
                    src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690373184/Untitled_design_16_tbyrqw.png"}
                    width={80}
                    height={80}
                    alt="ray"
                    className="rotate-[10deg]"
                    />
                </AttentionSeeker>
            </div>

            <div className='relative w-full min-h-[1350px] p-[60px]'>
                <div
                className="absolute top-[175px] left-[950px] z-[-1]"
                >
                    <AttentionSeeker effect="wobble" duration={2000}>
                        <Image
                        src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690373188/Untitled_design_17_hyusqw.png'}
                        alt="triangles"
                        width={100}
                        height={100}
                        className="rotate-[30deg]"
                        />
                    </AttentionSeeker>
                </div>
                
                <div
                className="absolute left-[300px] w-[300px] h-[375px] drop-shadow-xl rounded-xl -rotate-[9deg] transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-[#39bcdc]"
                onMouseEnter={() => {
                    hideAll();
                    setShowWeb(true)
                }}
                onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card flex flex-col justify-between items-center p-2">
                        <p
                        className={`text-3xl text-center mt-[20px]  ${lexend.className}`}
                        >Web<br />Development</p>

                        <Image
                        src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690368221/undraw_building_websites_i78t_vogdu2.svg"}
                        width={300}
                        height={357}
                        className=""
                        alt="building website" />
                    </div>
                </div>

                <div
                className="w-full h-[325px] flex justify-end mt-[50px] mb-[75px]"
                >
                    {showWeb && <Fade duration={600}>
                    <div
                    className="w-[650px] flex flex-col justify-center items-center bg-white transition-opacity ease-in"
                    >
                        <p
                        className="text-center text-3xl font-semibold tracking-wide mb-[15px]"
                        >Web Developement</p>
                        <p
                        className="text-xl font-medium tracking-wide"
                        >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    </Fade>}
                </div>

                <div
                className="absolute top-[650px] left-[350px]"
                >
                    <AttentionSeeker effect="swing" duration={2000}>
                        <Image
                        src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690377783/Untitled_design_4_nldou2.png'}
                        alt="square"
                        width={100}
                        height={100}
                        className="rotate-[-30deg]"
                        />
                    </AttentionSeeker>
                </div>

                <div
                className="absolute left-[850px] top-[550px] w-[300px] h-[375px] drop-shadow-xl rounded-xl rotate-[9deg] transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-yellow-300"
                onMouseEnter={() => {
                    hideAll();
                    setShowUIUX(true)
                }}
                onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card flex flex-col justify-between items-center p-2">
                        <p
                        className={`text-3xl text-center mt-[20px]  ${lexend.className}`}
                        >UI / UX</p>

                        <Image
                        src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690369327/undraw_futuristic_interface_re_0cm6_1_cxk7ih.svg"}
                        width={200}
                        height={257}
                        className=""
                        alt="building website" />
                    </div>
                </div>

                <div
                className="w-full h-[325px] flex justify-start mt-[150px] mb-[75px]"
                >
                    {showUIUX && <Fade duration={600}>
                    <div
                    className="w-[650px] flex flex-col justify-center items-center bg-white transition-opacity ease-in"
                    >
                        <p
                        className="text-center text-3xl font-semibold tracking-wide mb-[15px]"
                        >UI / UX</p>
                        <p
                        className="text-xl font-medium tracking-wide"
                        >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    </Fade>}
                </div>

                <div
                className="absolute top-[1150px] left-[900px]"
                >
                    <AttentionSeeker effect="tada" duration={2000}>
                        <Image
                        src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690380408/Untitled_design_7_r2ivbs.png'}
                        alt="triangles"
                        width={100}
                        height={100}
                        className="rotate-[30deg]"
                        />
                    </AttentionSeeker>
                </div>

                <div
                className="absolute left-[300px] top-[1050px] w-[300px] h-[375px] drop-shadow-xl rounded-xl -rotate-[9deg] transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-orange-300"
                onMouseEnter={() => {
                    hideAll();
                    setShowApp(true)
                }}
                onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card flex flex-col justify-between items-center p-2">
                        <p
                        className={`text-3xl text-center mt-[20px]  ${lexend.className}`}
                        >App<br />Development</p>

                        <Image
                        src={"https://res.cloudinary.com/db7nrltsv/image/upload/v1690369422/undraw_mobile_application_re_13u3_gria68.svg"}
                        width={200}
                        height={357}
                        className=""
                        alt="building website" />
                    </div>
                </div>

                <div
                className="w-full h-[325px] flex justify-end mt-[200px] mb-[75px]"
                >
                    {showApp && <Fade duration={600}>
                    <div
                    className="w-[650px] flex flex-col justify-center items-center bg-white transition-opacity ease-in"
                    >
                        <p
                        className="text-center text-3xl font-semibold tracking-wide mb-[15px]"
                        >App Developement</p>
                        <p
                        className="text-xl font-medium tracking-wide"
                        >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    </Fade>}
                </div>
            </div>
        </div>
    )
}

export default Services