import Container from "./Container"
import { useLanguage } from "../../hooks/useLanguage"

const Projects = () => {
    const { translation } = useLanguage()
    return (
        <div id="projects" className="min-h-screen h-full min-w-screen w-full bg-[#8ac3f5] relative">
            <div className="py-6 mx-[1.5rem] xs:mx-[2rem] sm:mx-[3.8rem] md:py-10 md:mr-[8rem] md:ml-[3rem] min-h-screen flex flex-col">
                <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-[#155561] font-extrabold pb-[2rem]">{translation.project.title}</h1>
                <div className="m-auto">
                    <Container />
                </div>
            </div>
        </div>
    )
}

export default Projects