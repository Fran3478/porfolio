import PropTypes from "prop-types"
import TechItems from "./TechItems"
import data from "../../../assets/data/data.json"
import { useState } from "react"

const Container = () => {
    const [active, setActive] = useState(data.techCat[0].cat)
    const [skill, setSkill] = useState(data.techSkill.filter((item) => item.cat === data.techCat[0].cat))
    const handleClick = (cat) => {
        setSkill(data.techSkill.filter((item) => item.cat === cat))
        setActive(cat)
    }
    return (
        <div className="flex flex-col rounded-b-md" >
            <div className="flex justify-around bg-[#416B9A]">
                {
                    data.techCat.map((item) => (
                        <button
                            type="button"
                            onClick={() => handleClick(item.cat)}
                            className={`min-w-fit w-full font-semibold text-base md:text-lg lg:text-2xl text-white  hover:bg-gradient-to-r hover:from-[#416B9A] hover:via-[#6bb2ef] hover:to-[#416B9A] ${active === item.cat ? "bg-gradient-to-r from-[#416B9A] via-[#6bb2ef] to-[#416B9A]" : 'bg-[#416B9A]'}`}
                            key={item.cat}>{item.title}
                        </button>
                    ))
                }
            </div>
            <div className="grid grid-cols-12 bg-[#51a6f053] rounded-b-md gap-2 p-2 shadow-lg shadow-[#51a6f092]">
                {
                    skill.map((item) => (
                        <TechItems
                            key={item.id}
                            title={item.title}
                            svg={item.svg}
                            alt={item.alt}
                        />
                    ))
                }
            </div>
        </div>
    )
}

Container.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

export default Container