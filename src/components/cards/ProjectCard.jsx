import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import PropTypes from "prop-types"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Status from "../projects/Status";
import ProjectButton from "../buttons/ProjectButton";
import { useRef } from "react";

const ROTATION_RANGE = 10
const HALF_ROTATION_RANGE = 10 / 2

const ProjectCard = ({ title, urlImg, alt, description, deploy, repo, status }) => {
    
    const ref = useRef(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const xSpring = useSpring(x)
    const ySpring = useSpring(y)

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0]

        const rect = ref.current.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
        const rY = mouseX / width - HALF_ROTATION_RANGE

        x.set(rX)
        y.set(rY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform
            }}
            className="text-white max-w-[28rem] bg-[#155561] bg-opacity-50 rounded-xl shadow-md shadow-[#155661d2] p-3"
        >
            <div 
                className="bg-[#155561] p-1 rounded-lg shadow-md shadow-[#155661c5]"
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d"
                }}
            >
                <div 
                    className="flex flex-col justify-center text-center overflow-hidden mt-[1rem] mx-[1rem] bg-white/20 rounded-md p-2 select-none pointer-events-none"
                    style={{
                        transform: "translateZ(75px)"
                    }}
                >
                    <img className="min-w-[100%] min-h-[100%] w-[25rem] object-cover rounded-md" src={urlImg} alt={alt} />
                    <Status status={status} />
                    <p className="font-bold text-base md:text-2xl text-white">{title}</p>
                </div>
                <div 
                    className="block"
                    style={{
                        transform: "translateZ(50px)"
                    }}
                >
                    <div className="mt-[1rem] mx-[1.7rem] 2ml:h-[9rem] lg:h-[8rem] select-none pointer-events-none">
                        <p className="text-sm ml:text-[1rem] tracking-tight leading-tight">{description}</p>
                    </div>
                    <div className="mt-[0.5rem] mb-[1rem] 2xl:mb-[1.5rem] mx-[1.5rem] flex justify-around">
                        <ProjectButton url={repo} ico={<AiOutlineGithub />} />
                        <ProjectButton url={deploy} ico={<AiOutlineLink />} />
                    </div>
                </div>
            </div>
        </motion.div>
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