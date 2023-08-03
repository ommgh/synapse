import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface Project {
    id: number
    name: string
    website: string
    img: string
    github: string
    description: string
    labels: string[]
}

interface BoxProps {
    project: Project
    setShowBox: Dispatch<SetStateAction<boolean>>
}

export const ProjectModel = ({ project, setShowBox }: BoxProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-[4] p-[70px] pb-[10px]">
            <div className="relative w-1/2 h-full flex flex-col justify-center items-center gap-[30px] pr-[60px]">
                <button
                    className="absolute top-0 left-0 py-2"
                    onClick={() => setShowBox(false)}
                >
                    <Image
                        width="34"
                        height="34"
                        src="https://img.icons8.com/sf-regular-filled/48/x.png"
                        alt="x"
                    />
                </button>

                <p className="w-full text-left text-4xl font-semibold tracking-wide">
                    {project.name}
                </p>

                <p className="w-full text-left text-xl font-medium whitespace-pre-line">
                    {project.description}
                </p>

                <div className="w-full h-auto grid grid-flow-row grid-cols-[repeat(4,minmax(150px,250px))] gap-[15px]">
                    {project.labels.map((label: string, index: number) => (
                        <p
                            key={index}
                            className="w-auto text-sm flex justify-center items-center text-center px-3 py-1 bg-slate-200 rounded-lg"
                        >
                            {label}
                        </p>
                    ))}
                </div>

                <ul className="w-full text-xl font-medium flex gap-[30px] tracking-wide">
                    {project.website && (
                        <Link
                            href={project.website}
                            target='_blank'
                            className="border-2 border-black rounded-lg font-medium py-2 px-5 outline outline-2 outline-transparent hover:outline-black"
                        >
                            Website
                        </Link>
                    )}

                    {project.github && (
                        <Link
                            href={project.github}
                            target='_blank'
                            className="border-2 border-black rounded-lg font-medium py-2 px-5 outline outline-2 outline-transparent hover:outline-black"
                        >
                            Github Repo
                        </Link>
                    )}
                </ul>
            </div>

            <div className="w-1/2 h-full">
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={project.img}
                        width={1920}
                        height={1080}
                        alt="project banner"
                    />
                </div>
            </div>
        </div>
    )
}