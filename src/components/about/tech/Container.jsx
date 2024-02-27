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
        <div className="flex flex-col mt-5 rounded-b-md" >
            <div className="flex text-center bg-[#6bb2ef]">
                {
                    data.techCat.map((item) => (
                        <button
                            type="button"
                            onClick={() => handleClick(item.cat)}
                            className={`min-w-fit w-52 font-semibold text-base md:text-lg lg:text-2xl text-white  hover:bg-gradient-to-r hover:from-blue-300 hover:via-[#6bb2ef] hover:to-blue-300 ${active === item.cat ? "bg-gradient-to-r from-blue-300 hover:via-[#6bb2ef] to-blue-300" : 'bg-[#6bb2ef]'}`}
                            key={item.cat}>{item.title}
                        </button>
                    ))
                }
            </div>
            <div className="grid grid-cols-12 bg-slate-100 rounded-b-md gap-2 p-2">
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

        // <div>
        //     <button className="w-full font-semibold text-base md:text-lg lg:text-2xl text-white bg-[#51A6F0] rounded-md">{title}</button>
        //     <div className="grid grid-cols-2 gap-2 mt-1">
        //         {
        //             items.map((item) => (
        //                 <TechItems
        //                     key={item.id}
        //                     title={item.title}
        //                     urlImg={item.img}
        //                     alt={item.alt}
        //                 />
        //             ))
        //         }
        //     </div>
        // </div>
    )
}

Container.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

export default Container