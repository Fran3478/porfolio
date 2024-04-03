import Container from "./Container"
import { useLanguage } from "../../hooks/useLanguage"

const Projects = () => {
    const { translation } = useLanguage()
    return (
        <div id="projects" className="min-h-screen h-full max-w-screen w-full bg-[#51a6f0ab] relative text-center sm:text-left">
            <div className="mx-[2rem] sm:ml-[3.8rem] sm:mr-[3.8rem] md:ml-16 md:mr-[8rem] min-h-screen flex flex-col">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#155561] font-extrabold pt-10">{translation.project.title}</h1>
                <div className="flex justify-center m-auto pb-10 md:pb-0">
                    <Container />
                </div>
            </div>
        </div>
    )
}

export default Projects