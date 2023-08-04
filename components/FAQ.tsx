'use client'

import { faqs } from '@/lib/data'
import { useToSetFAQS } from '@/lib/hooks'
import Image from 'next/image'
import { AttentionSeeker } from 'react-awesome-reveal'

interface Queries {
    id: number
    query: string
    answer: string
}

export const FAQ = () => {
    const { showAns, qIndex, handleClick } = useToSetFAQS()

    return (
        <div
            className="w-full p-[70px] max-[960px]:p-[40px] max-[700px]:p-2 max-[700px]:mb-[60px] max-[700px]:pt-[70px]"
            id="faqs"
        >
            <div className="w-fit flex m-auto mb-[0px]">
                <AttentionSeeker
                    effect="wobble"
                    triggerOnce={false}
                    className="z-[2]"
                >
                    <Image
                        src={'/images/scribble-question.png'}
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
                        src={'/images/scribble-question.png'}
                        width={50}
                        height={50}
                        alt="question mark"
                        className="rotate-[-10deg] mt-[30px]"
                    />
                </AttentionSeeker>
            </div>

            <p className="text-center text-5xl leading-[110px] font-semibold tracking-wide mb-[50px] max-[960px]:w-full max-[960px]:p-2 max-[960px]:text-4xl max-[960px]:leading-[60px]">
                Have some queries, we got you!
            </p>

            {faqs.map(({ id, query, answer }: Queries, index: number) => (
                <div
                    className="border-b-[1px] border-black p-4 m-4"
                    key={index}
                >
                    <p
                        className="text-2xl hover:cursor-pointer"
                        onClick={() => handleClick(id)}
                        key={id}
                    >
                        {showAns && qIndex == id ? '-' : '+'} {query}
                    </p>

                    {showAns && qIndex == id && (
                        <p className="text-xl my-[20px]">{answer}</p>
                    )}
                </div>
            ))}
        </div>
    )
}
