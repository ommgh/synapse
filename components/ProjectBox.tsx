import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ProjectBox = ({project, setShowBox}: any) => {
    console.log("box")
    return (
        <Fade
        duration={500}
        className="w-screen h-screen z-[5]"
        >
            <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-[4] p-[70px]"
            >
                <div
                className="relative w-1/2 h-full flex flex-col justify-center items-center gap-[50px] pr-9"
                >
                    <button
                    className="absolute top-0 left-0 px-4 py-2 text-lg border-2 border-transparent rounded-lg hover:border-black"
                    onClick={() => setShowBox(false)}
                    >Close</button>

                    <p
                    className="w-full text-left text-4xl font-semibold tracking-wide"
                    >{project.name}</p>

                    <p
                    className="w-full text-left text-xl font-medium"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, iure omnis id, ducimus maxime quia deleniti provident ab eaque dolorum dolorem rem debitis ut? Eveniet debitis quae sed ipsa quo.</p>

                    <ul
                    className="text-xl font-medium flex gap-[30px] tracking-wide"
                    >
                        <Link href={project.website}
                        className="hover:font-semibold"
                        >Website</Link>

                        <Link href={project.github}
                        className="hover:font-semibold"
                        >Github Repo</Link>
                    </ul>
                </div>

                <div
                className="w-1/2 h-full overflow-hidden"
                >
                    <Image
                    src={project.img}
                    width={700}
                    height={900}
                    alt="project banner"
                    />
                </div>
            </div>
        </Fade>
    );
};

export default ProjectBox;
