import { projectData } from "@/lib/data";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

interface Project {
    id: number,
    name: string,
    website: string,
    img: string,
    github: string,
    labels: string[],
}

const Project = () => {
    return (
        <div
        className={`w-full my-[80px] flex flex-col justify-center items-center border-2 border-black ${poppins.className}`}
        >
            <p
            className="text-5xl text-center font-semibold tracking-wider"
            >Our Work</p>

            <div
            className="grid grid-flow-row lg:grid-cols-2 md:grid-cols-1 justify-center items-center my-[40px] gap-[200px]"
            >
                {projectData.map((project: Project, id: number) => (
                    <div className="flex flex-col items-center" key={id}>
                        <div
                        className="w-[350px] h-[400px] border-2 border-black"
                        ></div>

                        <Link
                        className="text-2xl font-semibold tracking-wider my-[20px]"
                        href={project.website}
                        >{project.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
