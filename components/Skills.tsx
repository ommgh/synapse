import { lexend } from "@/lib/fonts"

const Skills = () => {
    const titleStyle = `z-[1] w-full h-full flex justify-center items-center text-xl tracking-[8px] bg-black/30 ${lexend.className} font-[900]`
    return (
        <div
        className="flex flex-col h-screen w-screen justify-center items-center bg-black/[0.9] text-white gap-[25px]"
        >
            <h1
            className={`font-bold text-[49px] leading-[112px] tracking-[8px] uppercase ${lexend.className}`}
            >SKILLS WE OFFER</h1>  

            <div
            className="w-screen h-[470px] grid grid-cols-[1fr_1fr_1fr] justify-center items-center"
            >
                <div
                className="w-full h-full flex justify-center items-center bg-center bg-contain bg-[url(/images/webdev.png)] bg-no-repeat"
                >
                    <p
                    className={titleStyle} 
                    >WEB DEVELOPMENT</p>
                </div>

                <div
                className="w-full h-full flex justify-center items-center bg-center bg-contain bg-[url(/images/app.png)] bg-no-repeat"
                >
                    <p
                    className={titleStyle}
                    >APP DEVELOPMENT</p>
                </div>

                <div
                className="w-full h-full flex justify-center items-center bg-center bg-contain bg-[url(/images/uiux.png)] bg-no-repeat"
                >
                    <p
                    className={titleStyle}
                    >UI UX DESIGNING</p>
                </div>
            </div>  
        </div>
    )
}

export default Skills