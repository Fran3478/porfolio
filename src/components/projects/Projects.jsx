import Container from "./Container"

const Projects = () => {

    return (
        <div id="projects" className="min-h-screen max-h-fit h-full max-w-screen w-full bg-[#51a6f0ab] relative text-center sm:text-left">
            <div className="mx-[2rem] sm:ml-[3.8rem] sm:mr-[3.8rem] md:ml-16 md:mr-[8rem]">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#155561] font-extrabold py-10">Projects</h1>
                <div className="flex justify-center pb-10">
                    <Container />
                </div>
            </div>
        </div>
    )
}

export default Projects