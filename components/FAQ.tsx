import { faqs } from '@/lib/data'
import Image from 'next/image'
import { useState } from 'react'
import { AttentionSeeker } from 'react-awesome-reveal'

interface Queries {
    id: number
    query: string
    answer: string
}

const FAQ = () => {
    const [showAns, setShowAns] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(-1)
    return (
        <div className="w-full p-[70px]">
            <div className="w-fit flex m-auto mb-[0px]">
                <AttentionSeeker
                    effect="wobble"
                    triggerOnce={false}
                    className="z-[2]"
                >
                    <Image
                        src={
                            'https://res.cloudinary.com/db7nrltsv/image/upload/v1690294091/Untitled_design_11_cigk4r.png'
                        }
                        width={50}
                        height={50}
                        alt="question mark"
                        className="rotate-[-50deg]"
                    />
                </AttentionSeeker>

                <AttentionSeeker
                    effect="wobble"
                    delay={500}
                    triggerOnce={false}
                >
                    <Image
                        src={
                            'https://res.cloudinary.com/db7nrltsv/image/upload/v1690294091/Untitled_design_11_cigk4r.png'
                        }
                        width={50}
                        height={50}
                        alt="question mark"
                        className="rotate-[-10deg] mt-[30px]"
                    />
                </AttentionSeeker>
            </div>
            <p className="text-center text-5xl leading-[110px] font-semibold tracking-wide mb-[50px]">
                Have some queries, we got you!
            </p>

            {faqs.map(({ id, query, answer }: Queries, index: number) => (
                <div
                    className="border-b-[1px] border-black p-4 m-4 hover:cursor-pointer"
                    key={index}
                >
                    <p
                        className="text-2xl"
                        onClick={() => {
                            setIndex(id)
                            setShowAns((prev: boolean) => !prev)
                        }}
                        key={id}
                    >
                        {showAns && index == id ? '-' : '+'} {query}
                    </p>

                    {showAns && index == id && (
                        <p className="text-xl my-[20px]">{answer}</p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default FAQ
