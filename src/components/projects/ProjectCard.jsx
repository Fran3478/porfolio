import PropTypes from "prop-types"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Status from "./Status";
import ProjectButton from "../buttons/ProjectButton";

const ProjectCard = ({ title, urlImg, alt, description, deploy, repo, status }) => {

    return (
        <div className="text-white max-w-[28rem] col-span-1 2ml:col-span-6 15xl:col-span-4 bg-[#155561] rounded-xl shadow-md shadow-[#155661d2]">
            <div className="flex flex-col justify-center text-center overflow-hidden mt-[1rem] mx-[1rem]">
                <img className="min-w-[100%] min-h-[100%] w-[25rem] object-cover rounded-md" src={urlImg} alt={alt} />
                <Status status={status} />
                <p className="font-bold text-base md:text-2xl text-white">{title}</p>
            </div>
            <div className="block">
                <div className="mt-[1rem] mx-[1.7rem] 2ml:h-[9rem] lg:h-[8rem]">
                    <p className="text-sm ml:text-[1rem] tracking-tight leading-tight">{description}</p>
                </div>
                <div className="mt-[0.5rem] mb-[1rem] 2xl:mb-[1.5rem] mx-[1.5rem] flex justify-around">
                    <ProjectButton url={repo} ico={<AiOutlineGithub />} />
                    <ProjectButton url={deploy} ico={<AiOutlineLink />} />
                </div>
                {/* <div className="hidden lg:flex flex-col	h-[15rem]">
                <div className="mb-auto mt-[1rem] mx-[1.7rem] h-[10rem]">
                    <p className="tracking-tight leading-tight">{description}</p>
                </div>
                <div className="p-[1.5rem] flex justify-around">
                    <ProjectButton url={repo} ico={<AiOutlineGithub />} />
                    <ProjectButton url={deploy} ico={<AiOutlineLink />} />
                </div>
            </div> */}
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
    status: PropTypes.object
}

export default ProjectCard