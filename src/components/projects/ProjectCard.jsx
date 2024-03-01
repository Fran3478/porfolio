import PropTypes from "prop-types"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const ProjectCard = ({ title, urlImg, alt, description, deploy, repo, status = "working on" }) => {

    return (
        <div className="text-white max-w-[30rem] col-span-3 lg:col-span-4 bg-[#155561] rounded-b-lg pb-6 shadow-xl shadow-[#155661d2]">
            <div className="flex flex-col justify-center text-center">
                <img className="min-w-[100%] max-w-[25rem] aspect-video object-cover" src={urlImg} alt={alt} />
                <div className={`${status === "finished" ? "bg-green-600 text-green-200" : status === "working on" ? "bg-yellow-500 text-yellow-100" : "bg-red-700 text-red-200"} rounded-full w-fit grid grid-cols-5 my-2 mr-3 self-end py-[0.2rem] px-[0.6rem]`}>
                    <div className={`${status === "finished" ? "bg-green-200" : status === "working on" ? "bg-yellow-100" : "bg-red-200"} h-2 w-2 rounded-full border-1 m-auto`} />
                    <p className="col-span-4 col-start-2 text-sm font-medium">{status}</p>
                </div>
                <p className="font-bold text-base md:text-2xl text-white">{title}</p>
            </div>
            <p className="p-[1.7rem] hidden lg:block">{description}</p>
            <div className="pt-5 lg:p-0 flex justify-around">
                <a className="bg-[#51A6F0] rounded-full text-2xl md:text-3xl lg:text-5xl p-2 hover:scale-110 hover:contrast-125 ease-in-out transition-all duration-300" href={repo} target="_blank" rel="noreferrer"><FaGithub /></a>
                <a className="bg-[#51A6F0] rounded-full text-2xl md:text-3xl lg:text-5xl p-2 hover:scale-110 hover:contrast-125 ease-in-out transition-all duration-300" href={deploy} target="_blank" rel="noreferrer"><TbWorld /></a>
            </div>
        </div>
    )
}
ProjectCard.propTypes = {
    title: PropTypes.string,
    urlImg: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
    deploy: PropTypes.string,
    repo: PropTypes.string,
    status: PropTypes.string
}

export default ProjectCard