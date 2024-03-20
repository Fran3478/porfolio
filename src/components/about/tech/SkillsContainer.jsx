import PropTypes from "prop-types"
import SkillItem from "./Skilltem"

const SkillsContainer = ({ skills }) => {

    return (
        <div className="grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 ml:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 grid-flow-row rounded-lg gap-2 ml:max-w-[36rem] 2xl:max-w-[46rem] m-auto">
            {
                skills.map((skill) => (
                    <SkillItem key={skill.title} title={skill.title} svg={skill.svg} alt={skill.alt} />
                ))
            }
        </div>
    )
}

SkillsContainer.propTypes = {
    skills: PropTypes.array
}

export default SkillsContainer