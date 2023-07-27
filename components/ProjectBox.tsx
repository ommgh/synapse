import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

const ProjectBox = ({ project, setShowBox }: any) => {
    console.log('box')
    return (
        <Fade duration={500} className="w-screen h-screen z-[5]">
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-[4] p-[70px] pb-[10px]">
                <div className="relative w-1/2 h-full flex flex-col justify-center items-center gap-[30px] pr-9">
                    <button
                        className="absolute top-0 left-0 py-1 text-lg border-b-2 border-transparent hover:border-black"
                        onClick={() => setShowBox(false)}
                    >
                        Close
                    </button>

                    <p className="w-full text-left text-4xl font-semibold tracking-wide">
                        {project.name}
                    </p>

                    <p className="w-full text-left text-xl font-medium whitespace-pre-line">
                        {project.description}
                    </p>

                    <div className="w-full h-auto flex flex-grow-0 gap-[20px]">
                        {project.labels.map((label: string, index: number) => (
                            <p
                                key={index}
                                className="w-auto text-center px-3 py-1 bg-slate-200 rounded-lg"
                            >
                                {label}
                            </p>
                        ))}
                    </div>

                    <ul className="w-full text-xl font-medium flex gap-[30px] tracking-wide">
                        {project.website && <Link
                            href={project.website}
                            className="hover:font-semibold hover:underline-offset-2"
                        >
                            Website
                        </Link>}

                        {project.github && <Link
                            href={project.github}
                            className="hover:font-semibold hover:underline-offset-2"
                        >
                            Github Repo
                        </Link>}
                    </ul>
                </div>

                <div className="w-1/2 h-full overflow-hidden">
                    <Image
                        src={project.img}
                        width={700}
                        height={900}
                        alt="project banner"
                    />
                </div>
            </div>
        </Fade>
    )
}

export default ProjectBox
