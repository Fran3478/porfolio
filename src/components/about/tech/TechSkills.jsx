import PropTypes from "prop-types"
import SkillsContainer from "./SkillsContainer"
import { useLanguage } from "../../../hooks/useLanguage"

const TechSkills = () => {
    const { translation } = useLanguage()

    return (
        <div className="pt-5">
            <div className="p-5 ml:p-7 rounded-lg shadow-lg bg-[#ace9c368]">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold">{translation.about.techSkill_section.title}</h2>
                <div className="flex flex-col">
                    {
                        translation.about.techSkill_section.categories.map((item) => (
                            <div key={item.cat} className="my-[1rem]">
                                <p className="text-[#416bac] font-semibold bg-[#a5dae0] rounded-md w-fit p-[0.4rem] mb-[1rem]">{item.title}</p>
                                <SkillsContainer skills={translation.about.techSkill_section.skills.filter((techSkill) => techSkill.cat === item.cat)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

TechSkills.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

export default TechSkills