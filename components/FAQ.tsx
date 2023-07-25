import { faqs } from "@/lib/data";
import { useState } from "react";

interface Queries {
    id: number,
    query: string,
    answer: string,
}

const FAQ = () => {
    const [showAns, setShowAns] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(-1)
    return (
        <div
        className="w-full border-2 border-black"
        >
            <p
            className="text-center text-5xl leading-[110px] font-semibold tracking-wide my-[50px]"
            >Have some queries, we got you!</p>

            {faqs.map(({query, answer}: Queries, id: number) => (
                <div
                className="border-b-[1px] border-black p-4 m-4 hover:cursor-pointer"
                key={id}
                >
                    <p
                    className="text-2xl"
                    onClick={() => {
                        setIndex(id)
                        setShowAns((prev: boolean) => !prev)
                    }}
                    >{showAns && index == id ? "-" : "+"} {query}</p>

                    {showAns && index == id && <p
                    className="text-xl my-[20px]"
                    >{answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
