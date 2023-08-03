import { projectData } from '@/lib/data'
import { poppins } from '@/lib/fonts'
import Image from 'next/image'
import ProjectBox from './ProjectBox'
import { useState } from 'react'
import { Bounce, Fade } from 'react-awesome-reveal'

interface Project {
    id: number
    name: string
    website: string
    img: string
    github: string
    description: string
    labels: string[]
}

const Project = () => {
    const [showBox, setShowBox] = useState<boolean>(false)
    const [project, setProject] = useState<Project>(projectData[0])
    const [index, setIndex] = useState<number>(-1)

    return (
        <div
            className={`flex flex-col min-h-screen pt-[50px] pb-[10px] px-[70px] w-screen justify-center items-center max-[600px]:px-[20px] max-[600px]:mb-[50px] ${poppins.className}`}
            id="projects"
        >
            <Bounce className="my-[40px]" triggerOnce>
                <p className="text-center text-6xl leading-[90px] font-semibold tracking-wider max-[700px]:w-full max-[700px]:text-5xl max-[700px]:leading-[75px] max-[500px]:text-4xl max-[500px]:leading-[60px]">
                    Want to see what <br /> innovative minds can create
                </p>
            </Bounce>

            <div
                className={`relative w-fit px-[90px] my-[80px] flex flex-col justify-center items-center max-[600px]:px-[20px] max-[700px]:mt-[40px] ${poppins.className}`}
            >
                <div className="mb-[-80px] z-[1] flex justify-center items-center gap-[300px] max-[830px]:gap-[160px] max-[700px]:mb-[-70px] max-[500px]:mb-[-60px]">
                    <Fade direction="left">
                        <Image
                            src={
                                'https://res.cloudinary.com/db7nrltsv/image/upload/v1690277394/Untitled_design_9_luljje.png'
                            }
                            width={100}
                            height={100}
                            alt="abstract design"
                            className="-rotate-90"
                        />
                    </Fade>

                    <Fade direction="right">
                        <Image
                            src={
                                'https://res.cloudinary.com/db7nrltsv/image/upload/v1690277394/Untitled_design_9_luljje.png'
                            }
                            width={100}
                            height={100}
                            alt="abstract design"
                            className="rotate-90"
                        />
                    </Fade>
                </div>

                <Fade delay={500} triggerOnce>
                    <p className="text-5xl text-center font-semibold tracking-wider mb-[50px] max-[830px]:text-3xl">
                        Our Work
                    </p>
                </Fade>

                <div className="grid grid-flow-row grid-cols-2 justify-center items-center mt-[70px] gap-[100px] max-[1330px]:grid-cols-1 max-[600px]:gap-[60px]">
                    {projectData.map((data: Project, id: number) => (
                        <>
                            {showBox && index == id && (
                                <Fade
                                    duration={500}
                                    className="w-screen h-screen z-[5]"
                                >
                                    <ProjectBox
                                        {...{
                                            project,
                                            setShowBox,
                                        }}
                                    />
                                </Fade>
                            )}
                            <Fade direction="up" triggerOnce cascade key={id}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-[533px] h-[300px] flex justify-center items-center overflow-hidden hover:cursor-pointer max-[600px]:w-full max-[600px]:h-fit bg-red-300"
                                        onClick={() => {
                                            setProject(data)
                                            setIndex(id)
                                            setShowBox(true)
                                        }}
                                    >
                                        <Image
                                            src={data.img}
                                            width={1920}
                                            height={1080}
                                            alt="project banner"
                                        />
                                    </div>

                                    <p className="text-2xl text-center font-semibold tracking-wider my-[20px] max-[600px]:my-[10px] max-[600px]:text-xl">
                                        {data.name}
                                    </p>
                                </div>
                            </Fade>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
