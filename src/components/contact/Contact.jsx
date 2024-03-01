import Button from "./Button"
import ContactForm from "./ContactForm"
import { AiOutlineMail } from 'react-icons/ai'
import { IoInformationCircleOutline } from "react-icons/io5";


const Contact = () => {

    return (
        <div id="contact" className="min-h-screen max-h-fit h-full max-w-screen w-full relative flex flex-col">
            <div className="mx-[2rem] sm:ml-[3.8rem] sm:mr-[3.8rem] md:ml-16 md:mr-[8rem] m-auto py-10">
                <div className="lg:w-[30rem] m-auto">
                    <h1 className="mb-4 lg:mb-[2.5rem] text-2xl md:text-3xl lg:text-5xl font-bold text-center text-[#1ab0ba]">Send me a message!</h1>
                    <p className="text-lg md:text-2xl lg:text-3xl text-center">Got a question or a proposal, or just want to chat about something?</p>
                </div>
                <div className="m-auto flex flex-col text-center justify-center my-4 lg:my-[2.5rem] 2xl:my-[4rem]">
                    {/* <p className="my-4 lg:my-[2.5rem]  lg:text-2xl">Don&apos;t be shy! I&apos;ll get back to you as soon as possible.</p> */}
                    <Button icon={<AiOutlineMail />} title={"Contact me!"} url="mailto:franciscohv95@gmail.com?Subject=Hi%20Francisco..." />
                    <div className="m-auto my-4 lg:my-[2.5rem] 2xl:my-[3rem] w-fit px-4 flex flex-col rounded-md  md:rounded-full md:flex-row py-2 text-blue-400 bg-blue-50 font-semibold" >
                        <span className="place-self-center pr-3"><IoInformationCircleOutline size={"1.5rem"} /></span>
                        <span>Click the above button to open your email app or just fill the form</span>
                    </div>
                </div>
                <div className="m-auto xl:max-w-[70%]">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact