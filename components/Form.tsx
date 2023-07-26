import { poppins } from "@/lib/fonts";
import { KnockAPI } from "@/lib/knockapi";
import { KnockClient } from "@/lib/knockclient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FormInput {
    name: string,
    email: string,
    message: string,
}

const Form = () => {
    const router = useRouter()
    const [userId, setUserId] = useState<string>("")
    const [formData, setFormData] = useState<FormInput>({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData((prev: FormInput) => ({
            ...prev,
            [name]: value,
        }))
        if(name == 'email') setUserId(formData.email.substring(0, formData.email.indexOf('@') + 1))
        console.log(userId)
    }

    const handleSubmit = () => {
        KnockAPI.setIdentify(userId, formData)
        KnockClient.getAuth(userId);
        KnockAPI.triggerWorkflow(userId, "admin@10012023", formData);
    }

    return (
        <form
        encType="multipart/form-data"
        className={`flex flex-col justify-center items-center max-w-[700px] m-auto border-dashed border-2 border-black p-[30px] rounded-[32px] ${poppins.className}`}
        onSubmit={(e: any) => {
            e.preventDefault()
            handleSubmit()
            e.target.reset();
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
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder="Email" />

            <label 
            htmlFor="message"
            className="text-lg w-full px-3 py-1"
            >Description</label>

            <textarea 
            id="message"
            name="message" 
            className="min-h-[300px] text-xl border-2 border-black outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-black focus:outline-black"
            onChange={handleChange}
            placeholder="Feel free to share your awesome ideas and proposals here. We're all ears and excited to explore creativity together." />

            <button 
            type="submit"
            className="py-2 px-7 mt-[34px] text-xl font-medium tracking-wide border-2 border-black rounded-lg outline outline-2 outline-transparent hover:outline-black hover:font-semibold"
            >Send</button>
        </form>
    );
};

export default Form;
