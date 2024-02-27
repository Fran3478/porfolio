import PropTypes from "prop-types"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const ProjectCard = ({ title, urlImg, alt, description, deploy, repo, status = "working on" }) => {

    return (
        <div className="text-white max-w-[30rem] col-span-3 lg:col-span-4 bg-[#36979b] rounded-b-lg">
            <div className="flex flex-col justify-center text-center">
                <img className="min-w-[100%] max-w-[25rem] aspect-video object-cover" src={urlImg} alt={alt} />
                <div className="bg-yellow-500 rounded-full w-fit text-white grid grid-cols-5 mt-2 ml-2">
                    <div className="bg-white h-2 w-2 rounded-full border-1 m-auto" />
                    <p className="col-span-4 col-start-2 text-left text-sm font-medium px-[0.5rem]">{status}</p>
                </div>
                <p className="font-bold text-base md:text-2xl text-white mb-4">{title}</p>
            </div>
            <p className="mx-[1rem] hidden lg:block">{description}</p>
            <div className="flex justify-around m-3">
                <a className="bg-[#51A6F0] rounded-md text-3xl p-2" href={repo} target="_blank" rel="noreferrer"><FaGithub className="lg:hidden" /> <span className="text-xl lg:block hidden">GitHub</span></a>
                <a className="bg-[#51A6F0] rounded-md text-3xl p-2" href={deploy} target="_blank" rel="noreferrer"><TbWorld className="lg:hidden" /> <span className="text-xl lg:block hidden">WebPage</span></a>
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