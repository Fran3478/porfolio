import Status from "../status/Status"
import ContactLink from "../buttons/ContactLink"
import ContactForm from "./ContactForm"
import { AiOutlineMail } from 'react-icons/ai'
import { useLanguage } from "../../hooks/useLanguage"
import { motion } from "framer-motion"

const Contact = () => {
    const { translation } = useLanguage()

    return (
        <div id="contact" className="min-h-screen max-h-fit h-full max-w-screen w-full relative flex flex-col">
            <div className="mx-[2rem] sm:ml-[3.8rem] sm:mr-[3.8rem] md:ml-16 md:mr-[8rem] m-auto py-10">
                <motion.div
                    initial={{
                        y:-50,
                        opacity:0
                    }}
                    whileInView={{
                        y:0,
                        opacity:1,
                        transition: {
                            duration:0.5,
                            delay:0.2
                        }
                    }}
                    viewport={{
                        once:true
                    }}
                    className="m-auto"
                >
                    <h1 className="mb-4 lg:mb-[2.5rem] text-2xl md:text-3xl lg:text-5xl font-bold text-center text-[#1ab0ba]">{translation.contact.title}</h1>
                    <p className="text-lg md:text-2xl lg:text-3xl text-center">{translation.contact.subtitle}</p>
                </motion.div>
                <motion.div
                    initial={{
                        y:50,
                        opacity:0
                    }}
                    whileInView={{
                        y:0,
                        opacity:1,
                        transition: {
                            duration:0.5,
                            delay:0.2
                        }
                    }}
                    viewport={{
                        once:true
                    }}
                    className="m-auto flex flex-col text-center justify-center my-4 lg:my-[2.5rem] 2xl:my-[4rem]"
                >
                    <ContactLink icon={<AiOutlineMail />} title={translation.contact.contact_button} url={`mailto:franciscohv95@gmail.com?Subject=${translation.contact.form.email.subject}`} />
                    <div className="m-auto my-4 lg:my-[2.5rem] 2xl:my-[3rem]">
                        <Status text={translation.contact.info} type={"info"} />
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity:0,
                        y:80
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition:{
                            duration: 0.5,
                            delay:0.2
                        }
                    }}
                    viewport={{
                        once:true
                    }}
                    className="m-auto xl:max-w-[70%]"
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    )
}

export default Contact