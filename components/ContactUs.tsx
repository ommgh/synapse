import { lexend, poppins } from "@/lib/fonts"
import Image from "next/image"

const ContactUs = () => {
    const btnStyle = 'w-[90px] h-[90px] flex items-center justify-center bg-center bg-contain bg-[url(/images/downBtn.png)] bg-no-repeat';

    return (
        <div
        className="relative flex flex-col h-[100vh] w-screen justify-center items-center"
        >
            <div
            className="absolute top-0 left-0 w-screen h-[100vh] bg-center bg-cover bg-[url(/images/contactus-bg.png)] bg-no-repeat"
            ></div>

            <div
            className="z-[1] flex flex-col justify-center items-center"
            >
                <div 
                className="anuratiFont w-[264.98px] h-[26px] text-center text-white text-[21px] font-normal uppercase tracking-widest mb-[40px]"
                >synapse</div>

                <div 
                className={`w-[642.65px] h-[86px] text-center text-white text-[69px] font-semibold uppercase tracking-widest mb-[30px] ${lexend.className}`}
                >get in touch</div>

                <p 
                className={`w-[884.51px] h-[77px] text-center text-white text-[24px] font-medium leading-10 tracking-widest mb-[50px] ${poppins.className}`}
                >Ready to embark on your next project? Reach out to us today and let&apos;s turn your ideas into reality</p>

                <button
                className={`w-[400px] h-[84px] relative bg-black flex justify-center items-center pl-1 pr-[3.94px] mb-[50px] text-center text-white text-[21px] font-semibold uppercase leading-10 tracking-widest ${lexend.className}`}
                >
                    start building&nbsp;&nbsp;<Image 
                        src={'/images/right.png'} 
                        alt="right" 
                        width={12} 
                        height={20} />
                </button>

                <div
                className="flex justify-center items-center gap-[35px]"
                >
                    <button
                    className={btnStyle}
                    aria-label="Phone"
                    >
                        <div
                        className='w-[45.50px] h-[45px] bg-center bg-contain bg-[url(/images/phone.png)] bg-no-repeat'
                        ></div>
                    </button>

                    <button
                    className={btnStyle}
                    aria-label="Mail"
                    >
                        <div
                        className='w-[45.50px] h-[45px] bg-center bg-contain bg-[url(/images/mail.png)] bg-no-repeat'
                        ></div>
                    </button>

                    <button
                    className={btnStyle}
                    aria-label="Up"
                    >
                        <div
                        className='w-[45.50px] h-[45px] bg-center bg-contain bg-[url(/images/up.png)] bg-no-repeat'
                        ></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs