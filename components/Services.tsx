import { poppins } from "@/lib/fonts"
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";

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
        className={`flex flex-col min-h-screen py-[50px] px-[70px] w-screen justify-center items-center ${poppins.className}`}
        id="services"
        >
            <Zoom
            triggerOnce
            duration={500}
            delay={500}
            ><p
            className="text-center text-6xl leading-[90px] font-semibold tracking-wider my-[50px]"
            >We provide all the services <br/> you need right in your <br/> product</p></Zoom>

            <div className='relative w-full min-h-[1350px] p-[60px]'>
                
                <div
                className="absolute left-[300px] w-[300px] h-[375px] drop-shadow-xl rounded-xl -rotate-[9deg] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer overflow-hidden bg-pink-300"
                onMouseEnter={() => {
                    hideAll();
                    setShowWeb(true)
                }}
                onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card">Web dev</div>
                </div>

                <div
                className="w-full h-[325px] flex justify-end mt-[30px] mb-[75px]"
                >
                    {showWeb && <div
                    className="w-[650px] flex flex-col justify-center items-center transition-opacity ease-in"
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
                    </div>}
                </div>

                <div
                className="absolute left-[900px] top-[450px] w-[300px] h-[375px] border-4 border-black rounded-xl rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer bg-black"
                onMouseEnter={() => {
                    hideAll();
                    setShowUIUX(true)
                }}
                onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card">UI / UX</div>
                </div>

                <div
                className="w-full h-[325px] flex justify-start mt-[30px] mb-[75px]"
                >
                    {showUIUX && <div
                    className="w-[650px] flex flex-col justify-center items-center transition-opacity ease-in"
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
                    </div>}
                </div>

                <div
                className="absolute left-[300px] top-[850px] w-[300px] h-[375px] border-4 border-black rounded-xl -rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer bg-black"
                onMouseEnter={() => {
                    hideAll();
                    setShowApp(true)
                }}
                onMouseLeave={() => hideAll()}
                >
                    <div className="glass-card">App dev</div>
                </div>

                <div
                className="w-full h-[325px] flex justify-end mt-[30px] mb-[75px]"
                >
                    {showApp && <div
                    className="w-[650px] flex flex-col justify-center items-center transition-opacity ease-in"
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
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Services