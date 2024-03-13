import PropTypes from "prop-types"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Status from "./Status";
import ProjectButton from "../buttons/ProjectButton";

const ProjectCard = ({ title, urlImg, alt, description, deploy, repo, status = "working on" }) => {

    return (
        <div className="text-white max-w-[30rem] col-span-3 lg:col-span-4 bg-[#155561] rounded-b-lg pb-6 shadow-xl shadow-[#155661d2]">
            <div className="flex flex-col justify-center text-center">
                <img className="min-w-[100%] max-w-[25rem] aspect-video object-cover" src={urlImg} alt={alt} />
                <Status status={status} />
                <p className="font-bold text-base md:text-2xl text-white">{title}</p>
            </div>
            <p className="p-[1.7rem] hidden lg:block tracking-tight leading-tight">{description}</p>
            <div className="pt-5 lg:p-0 flex justify-around">
                <ProjectButton url={repo} ico={<AiOutlineGithub />} />
                <ProjectButton url={deploy} ico={<AiOutlineLink />} />
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