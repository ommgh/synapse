'use client'

import { lexend, poppins } from '@/lib/fonts'
import Image from 'next/image'
import { useState } from 'react'
import { AttentionSeeker, Fade, Zoom } from 'react-awesome-reveal'

export const Services = () => {
    const [showWeb, setShowWeb] = useState(false)
    const [showUIUX, setShowUIUX] = useState(false)
    const [showApp, setShowApp] = useState(false)

    const hideAll = () => {
        setShowWeb(false)
        setShowUIUX(false)
        setShowApp(false)
    }

    return (
        <div
            className={`relative flex flex-col min-h-screen pt-[50px] px-[70px] w-screen justify-center items-center max-[550px]:px-[20px] max-[550px]:pt-[20px] ${poppins.className}`}
            id="services"
        >
            <div className="absolute top-[70px] left-[150px] rotate-[20deg] max-[550px]:top-[30px] max-[550px]:left-[-50px] max-[550px]:scale-[0.35] max-[550px]:rotate-[30deg]">
                <AttentionSeeker effect="wobble">
                    <Image
                        src={'/images/side-rays.png'}
                        width={150}
                        height={150}
                        alt="ray"
                        className="select-none"
                    />
                </AttentionSeeker>
            </div>

            <Zoom triggerOnce duration={500} delay={500}>
                <p className="max-w-[881px] text-center text-6xl leading-[90px] font-semibold tracking-wider my-[90px] max-[1030px]:text-5xl max-[1070px]:max-w-full max-[550px]:text-3xl max-[550px]:px-[15px]">
                    We provide all the services you need right in your product
                </p>
            </Zoom>

            <div
                className="absolute top-[370px] right-[200px] rotate-[150deg] flex max-[550px]:right-[-20px] max-[550px]:top-[220px] max-[550px]:scale-[0.4]"
            >
                <AttentionSeeker cascade effect="heartBeat">
                    <Image
                        src={'/images/sparkle.png'}
                        width={80}
                        height={80}
                        alt="ray"
                        className="rotate-[-20deg] mr-[10px] select-none"
                    />
                    <Image
                        src={'/images/sparkle.png'}
                        width={80}
                        height={80}
                        alt="ray"
                        className="rotate-[10deg] select-none"
                    />
                </AttentionSeeker>
            </div>

            <div className="relative w-full min-h-[1350px] pt-[60px] max-[900px]:pt-[20px] max-[900px]:mb-[35px]">
                <div className="absolute top-[175px] left-[61.8%] z-[-1] max-[1050px]:hidden">
                    <AttentionSeeker effect="wobble" duration={2000}>
                        <Image
                            src={'/images/scribble-triangles.png'}
                            alt="triangles"
                            width={100}
                            height={100}
                            className="rotate-[30deg] select-none"
                        />
                    </AttentionSeeker>
                </div>

                <div
                    className="absolute left-[19%] w-[300px] h-[375px] drop-shadow-xl rounded-xl -rotate-[9deg] transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-[#39bcdc] max-[900px]:left-[1/2] max-[900px]:scale-[0.9] max-[480px]:left-[20px]"
                    onMouseEnter={() => {
                        hideAll()
                        setShowWeb(true)
                    }}
                    onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card flex flex-col justify-between items-center p-2">
                        <p
                            className={`text-3xl text-center mt-[20px]  ${lexend.className}`}
                        >
                            Web
                            <br />
                            Development
                        </p>

                        <Image
                            src={'/images/web-dev.svg'}
                            width={300}
                            height={357}
                            className="select-none"
                            alt="building website"
                        />
                    </div>
                </div>

                <div className="w-full h-[325px] flex justify-end mt-[50px] mb-[75px] max-[1389px]:hidden">
                    {showWeb && (
                        <Fade duration={600}>
                            <div className="w-[650px] flex flex-col justify-center items-center bg-white transition-opacity ease-in">
                                <p className="text-center text-3xl font-semibold tracking-wide mb-[15px]">
                                    Web Developement
                                </p>
                                <p className="text-xl font-medium tracking-wide">
                                    With our expert web development services, we
                                    breathe life into your online presence.
                                    Crafting visually captivating and responsive
                                    websites, we ensure seamless user
                                    experiences across devices. Emphasizing on
                                    the latest technologies, we build tailored
                                    solutions that align with your business
                                    goals. Trust our team to enhance your
                                    digital footprint and drive unparalleled
                                    growth.
                                </p>
                            </div>
                        </Fade>
                    )}
                </div>

                <div className="absolute top-[650px] left-[22.8%] max-[1050px]:hidden">
                    <AttentionSeeker effect="swing" duration={2000}>
                        <Image
                            src={'/images/scribble-box.png'}
                            alt="box"
                            width={100}
                            height={100}
                            className="rotate-[-30deg] select-none"
                        />
                    </AttentionSeeker>
                </div>

                <div
                    className="absolute left-[55.3%] top-[550px] w-[300px] h-[375px] drop-shadow-xl rounded-xl rotate-[9deg] transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-yellow-300 max-[900px]:left-[20%] max-[900px]:top-[500px] max-[900px]:scale-[0.9] max-[480px]:left-[20px]"
                    onMouseEnter={() => {
                        hideAll()
                        setShowUIUX(true)
                    }}
                    onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card flex flex-col justify-between items-center p-2">
                        <p
                            className={`text-3xl text-center mt-[20px]  ${lexend.className}`}
                        >
                            UI / UX
                        </p>

                        <Image
                            src={'/images/ui-ux.svg'}
                            width={200}
                            height={257}
                            className=""
                            alt="ui ux"
                        />
                    </div>
                </div>

                <div className="w-full h-[325px] flex justify-start mt-[150px] mb-[75px] max-[1389px]:hidden">
                    {showUIUX && (
                        <Fade duration={600}>
                            <div className="w-[650px] flex flex-col justify-center items-center bg-white transition-opacity ease-in">
                                <p className="text-center text-3xl font-semibold tracking-wide mb-[15px]">
                                    UI / UX
                                </p>
                                <p className="text-xl font-medium tracking-wide">
                                    Elevate your brand experience with our
                                    exceptional UI/UX design services. Our
                                    creative minds blend aesthetics and
                                    usability, producing designs that captivate
                                    and resonate with your target audience. We
                                    believe that seamless user experiences drive
                                    success, and we&apos;re passionate about
                                    crafting interfaces that do just that.
                                    Embrace innovative design that leaves a
                                    lasting impression.
                                </p>
                            </div>
                        </Fade>
                    )}
                </div>

                <div className="absolute top-[1150px] left-[58.5%] max-[1050px]:hidden">
                    <AttentionSeeker effect="tada" duration={2000}>
                        <Image
                            src={'/images/scribble-phone.png'}
                            alt="phone"
                            width={100}
                            height={100}
                            className="rotate-[30deg]"
                        />
                    </AttentionSeeker>
                </div>

                <div
                    className="absolute left-[19%] top-[1050px] w-[300px] h-[375px] drop-shadow-xl rounded-xl -rotate-[9deg] transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-orange-300 max-[900px]:left-[1/2] max-[900px]:top-[1000px] max-[900px]:scale-[0.9] max-[480px]:left-[20px]"
                    onMouseEnter={() => {
                        hideAll()
                        setShowApp(true)
                    }}
                    onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card flex flex-col justify-between items-center p-2">
                        <p
                            className={`text-3xl text-center mt-[20px]  ${lexend.className}`}
                        >
                            App
                            <br />
                            Development
                        </p>

                        <Image
                            src={'/images/app-dev.svg'}
                            width={200}
                            height={357}
                            className=""
                            alt="building website"
                        />
                    </div>
                </div>

                <div className="w-full h-[325px] flex justify-end mt-[200px] mb-[75px] max-[1389px]:hidden">
                    {showApp && (
                        <Fade duration={600}>
                            <div className="w-[650px] flex flex-col justify-center items-center bg-white transition-opacity ease-in">
                                <p className="text-center text-3xl font-semibold tracking-wide mb-[15px]">
                                    App Developement
                                </p>
                                <p className="text-xl font-medium tracking-wide">
                                    Unleash the potential of mobile technology
                                    with our cutting-edge app development
                                    services. From intuitive user interfaces to
                                    powerful functionality, we create apps that
                                    leave a lasting impact. Whether it&apos;s
                                    iOS or Android, we cater to diverse
                                    platforms with precision and flair. Empower
                                    your business and engage users like never
                                    before with our innovative app solutions.
                                </p>
                            </div>
                        </Fade>
                    )}
                </div>
            </div>
        </div>
    )
}
