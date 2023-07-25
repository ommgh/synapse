import { poppins } from "@/lib/fonts"
import { useState } from "react";
import Project from "./Project";

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
        >
            <p
            className="text-center text-7xl leading-[110px] font-semibold tracking-widest my-[50px]"
            >We provide all the services <br/> you need right in your <br/> product</p>

            <div className='relative w-full min-h-[1350px] p-[60px]'>
                <div
                className="absolute left-[300px] w-[300px] h-[375px] border-4 border-black rounded-xl -rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer"
                onMouseEnter={() => {
                    hideAll();
                    setShowWeb(true)
                }}
                onMouseLeave={() => hideAll()}
                >WEB APP</div>

                <div
                className="w-full h-[325px] flex justify-end mt-[30px] mb-[75px]"
                >
                    {showWeb && <div
                    className="w-[650px] flex flex-col justify-center items-center"
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
                className="absolute left-[900px] top-[450px] w-[300px] h-[375px] border-4 border-black rounded-xl rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer"
                onMouseEnter={() => {
                    hideAll();
                    setShowUIUX(true)
                }}
                onMouseLeave={() => hideAll()}
                >UI / UX</div>

                <div
                className="w-full h-[325px] flex justify-start mt-[30px] mb-[75px]"
                >
                    {showUIUX && <div
                    className="w-[650px] flex flex-col justify-center items-center"
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
                className="absolute left-[300px] top-[850px] w-[300px] h-[375px] border-4 border-black rounded-xl -rotate-[9deg] p-[10px] flex justify-center items-center font-extrabold text-[56px] text-center tracking-widest transition ease-linear hover:rotate-0 hover:transition hover:ease-linear hover:cursor-pointer"
                onMouseEnter={() => {
                    hideAll();
                    setShowApp(true)
                }}
                onMouseLeave={() => hideAll()}
                >APP DEV</div>

                <div
                className="w-full h-[325px] flex justify-end mt-[30px] mb-[75px]"
                >
                    {showApp && <div
                    className="w-[650px] flex flex-col justify-center items-center"
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
            
            <div className="mb-[70px] mt-[100px]">
                <p
                className="text-center text-7xl leading-[110px] font-semibold tracking-widest"
                >Want to see what <br/> innovative minds can create</p>
            </div>

            <Project />
        </div>
    )
}

export default Services