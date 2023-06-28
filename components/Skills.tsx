import { lexend } from "@/lib/fonts"

const Skills = () => {
    const titleStyle = `z-[1] w-full h-full flex justify-center items-center bg-black/20 text-[24px] font-extrabold uppercase leading-loose tracking-widest ${lexend.className}`

    return (
        <div
        className="flex flex-col h-[110vh] w-screen justify-center items-center bg-black/[0.9] text-white gap-[15px]"
        >
            <h1
            className={`w-[1278px] h-[86px] text-center text-white text-[69px] font-semibold uppercase leading-10 tracking-widest ${lexend.className}`}
            >Skills we offer</h1>
            

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