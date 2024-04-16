import TechSkills from "./tech/TechSkills"
import Introduction from "./background/Introduction"
import BackgroundContainer from "./background/BackgoundContainer"
import { useLanguage } from "../../hooks/useLanguage"
import { motion } from "framer-motion"

const AboutMe = () => {
    const { translation } = useLanguage()
    return (
        <div id="aboutMe" className="sm:text-left min-h-screen min-w-screen h-full w-full m-auto bg-[#ace9c368] overflow-hidden">
            <div className="py-6 mx-[1.5rem] xs:mx-[2rem] sm:mx-[3.8rem] md:py-10 md:mr-[8rem] md:ml-[3rem] min-h-screen flex flex-col">
                <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold">{translation.about.title}</h1>
                <div className="flex flex-col ml:grid grid-cols-12 grid-flow-row gap-4 lg:gap-5 xl:gap-7 m-auto">
                    <motion.div
                        className="ml:col-span-6 ml:col-start-1 ml:row-start-1"
                        initial={{
                            opacity: 0,
                            x: -200,
                        }}
                        whileInView={{
                            transition: {
                                duration: 0.5
                            },
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                    >
                        <Introduction />
                    </motion.div>
                    <motion.div
                        className="ml:col-start-7 ml:col-span-6 ml:row-span-2 ml:self-center"
                        initial={{
                            opacity: 0,
                            x: 200
                        }}
                        whileInView={{
                            transition: {
                                duration: 0.5
                            },
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                    >        
                        <TechSkills />
                    </motion.div>
                    <motion.div
                        className="ml:col-span-6 ml:col-start-1 ml:row-start-2"
                        initial={{
                            opacity: 0,
                            y: 200
                        }}
                        whileInView={{
                            transition: {
                                duration: 0.5
                            },
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                    >
                        <BackgroundContainer />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe