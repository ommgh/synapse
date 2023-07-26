import { poppins } from "@/lib/fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
    const router = useRouter()
    const files: string[] = [];
    const [uploaded, setUploaded] = useState<boolean>(false)
    const uploadFiles = (filelist: FileList) => {
        Array.from(filelist).map(({name}: File, index: number) => {
            files.push(name);
        })
        if(files.length > 0) setUploaded(true);
        console.log(files)
    }

    return (
        <form
        encType="multipart/form-data"
        className={`flex flex-col justify-center items-center max-w-[700px] m-auto border-dashed border-2 border-black p-[30px] rounded-[32px] ${poppins.className}`}
        onSubmit={(e: any) => {
            e.preventDefault()
            console.log(e.target)
        }}
        >
            <label 
            htmlFor="name"
            className="text-lg w-full px-3 py-1"
            >Name</label>

            <input 
            type="text" 
            name="name" 
            id="name"
            className="text-xl border-2 border-black outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-black focus:outline-black"
            placeholder="Name" />

            <label 
            htmlFor="email"
            className="text-lg w-full px-3 py-1"
            >Email</label>

            <input 
            type="email" 
            name="email" 
            id="email"
            className="text-xl border-2 border-black outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-black focus:outline-black"
            placeholder="Email" />

            <label 
            htmlFor="message"
            className="text-lg w-full px-3 py-1"
            >Description</label>

            <textarea 
            id="message"
            name="message" 
            className="min-h-[300px] text-xl border-2 border-black outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-black focus:outline-black"
            placeholder="Feel free to share your awesome ideas and proposals here. We're all ears and excited to explore creativity together." />

            <label htmlFor="upload"
            className="text-lg w-full px-3 py-1"
            >File Section:</label>

            <div
            id="upload"
            className="relative w-full h-[200px] flex justify-center items-center border-2 border-dashed border-black rounded-2xl outline outline-2 outline-black outline-offset-4 hover:cursor-pointer hover:bg-slate-200"
            >
                {!uploaded ?
                    <p
                    className="w-full text-center"
                    >Upload files or drag or drop them</p>:

                    <div>
                        hi
                        {files.map((fileName: string, index: number) => (
                            <p
                            className="py-2 px-4 border-dotted border-[3px] border-black rounded-lg"
                            >{fileName}</p>
                        ))}
                    </div>
                }

                <input 
                type="file" 
                name="file" 
                id="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 border-2 border-red-300"
                multiple
                onClick={(e: any) => uploadFiles(e.target.files)}
                />
            </div>

            {uploaded && <button
            className="py-2 px-7 mt-[34px] text-xl font-medium tracking-wide border-2 border-black rounded-lg outline outline-2 outline-transparent hover:outline-black hover:font-semibold"
            onClick={() => {
                files.splice(0, files.length)
                setUploaded(false)
            }}
            >Cancel upload</button>}

            <button 
            type="submit"
            className="py-2 px-7 mt-[34px] text-xl font-medium tracking-wide border-2 border-black rounded-lg outline outline-2 outline-transparent hover:outline-black hover:font-semibold"
            >Send</button>
        </form>
    );
};

export default Form;
