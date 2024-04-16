import PropTypes from "prop-types"
import SkillItem from "./Skilltem"
import { motion } from "framer-motion"

const SkillsContainer = ({ skills }) => {

    const variants = {
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2
            }
        }),
        hidden: {
            opacity: 0,
            x: -200
        }
    }

    return (
        <div className="grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 ml:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 grid-flow-row rounded-lg gap-2 ml:max-w-[36rem] 2xl:max-w-[46rem] m-auto">
            {
                skills.map((skill, i) => (
                    <motion.div
                        key={skill.title}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        variants={variants}
                    >
                        <SkillItem title={skill.title} svg={skill.svg} alt={skill.alt} />
                    </motion.div>
                ))
            }
        </div>
    )
}

SkillsContainer.propTypes = {
    skills: PropTypes.array
}

export default SkillsContainer