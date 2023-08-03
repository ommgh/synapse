import { lexend } from '@/lib/fonts'
import { Footer } from './footer'
import { Form } from './submission-form'

export const FormPage = () => {
    return (
        <>
            <div className="w-screen min-h-screen p-[80px] max-[850px]:p-[40px] max-[850px]:pt-[80px] max-[550px]:p-[20px] max-[550px]:pt-[80px]">
                <h1
                    className={`w-full text-center text-5xl my-[30px] ${lexend.className}`}
                >
                    Start building with us
                </h1>
                <Form />
            </div>

            <Footer />
        </>
    )
}
