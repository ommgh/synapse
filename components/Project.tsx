import { projectData } from "@/lib/data";
import { poppins } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import ProjectBox from "./ProjectBox";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal"

interface Project {
    id: number,
    name: string,
    website: string,
    img: string,
    github: string,
    labels: string[],
}

const Project = () => {
    const [showBox, setShowBox] = useState<boolean>(false)
    const [boxData, setBoxData] = useState<Project>(projectData[0])
    const [index, setIndex] = useState<number>(-1);
    return (
        <div
        className={`flex flex-col min-h-screen py-[50px] px-[70px] w-screen justify-center items-center ${poppins.className}`}
        id="projects"
        >
            <Bounce className="mb-[70px] mt-[100px]" triggerOnce>
                <p
                className="text-center text-6xl leading-[90px] font-semibold tracking-wider"
                >Want to see what <br/> innovative minds can create</p>
            </Bounce>

            <div
            className={`relative w-fit px-[90px] my-[80px] flex flex-col justify-center items-center ${poppins.className}`}
            >
                <Fade delay={500} triggerOnce>
                    <div
                    className="mb-[-80px] z-[1] flex justify-center items-center gap-[300px]"
                    >
                        <Image
                        src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690277394/Untitled_design_9_luljje.png'}
                        width={100}
                        height={100}
                        alt="abstract design"
                        className="-rotate-90"
                        />

                        <Image
                        src={'https://res.cloudinary.com/db7nrltsv/image/upload/v1690277394/Untitled_design_9_luljje.png'}
                        width={100}
                        height={100}
                        alt="abstract design"
                        className="rotate-90"
                        />
                    </div>
                </Fade>

                <Fade
                delay={500} triggerOnce
                >
                    <p
                    className="text-5xl text-center font-semibold tracking-wider mb-[50px]"
                    >Our Work</p>
                </Fade>
                <div
                className="grid grid-flow-row lg:grid-cols-2 md:grid-cols-1 justify-center items-center mt-[70px] gap-[200px]"
                >
                    {projectData.map((project: Project, id: number) => (
                        <>
                        <Fade
                        direction="up"
                        triggerOnce
                        cascade>
                            <div className="flex flex-col items-center" key={id}>
                                <div
                                className="w-[350px] h-[400px] flex justify-center items-center overflow-hidden hover:cursor-pointer"
                                onClick={() => {
                                    setBoxData(project)
                                    setIndex(id)
                                    setShowBox(true)
                                }}
                                >
                                    <Image
                                    src={project.img}
                                    width={350}
                                    height={400}
                                    alt="project banner"
                                    />
                                </div>

                                <Link
                                className="text-2xl font-semibold tracking-wider my-[20px]"
                                href={project.website}
                                >{project.name}</Link>
                            </div>
                        </Fade>
                        {showBox && <ProjectBox project={boxData} setShowBox={setShowBox} />}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
