import PropTypes from "prop-types"
import SkillsContainer from "./SkillsContainer"
import data from "../../../assets/data/data.json"

const TechSkills = () => {

    return (
        <div className="pt-5">
            <div className="p-5 ml:p-7 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#ace9c368]">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold">Tech Skills</h2>
                <div className="flex flex-col">
                    {
                        data.techCat.map((item) => (
                            <div key={item.cat} className="my-[1rem]">
                                <p className="text-[#416bac] font-semibold bg-[#a5dae0] rounded-md w-fit p-[0.4rem] mb-[1rem]">{item.title}</p>
                                <SkillsContainer skills={data.techSkill.filter((techSkill) => techSkill.cat === item.cat)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        // <div className="flex flex-col rounded-b-md" >
        //     <div className="flex justify-around bg-[#416B9A]">
        //         {
        //             data.techCat.map((item) => (
        //                 <button
        //                     type="button"
        //                     onClick={() => handleClick(item.cat)}
        //                     className={`min-w-fit w-full font-semibold text-base md:text-lg lg:text-2xl text-white  hover:bg-gradient-to-r hover:from-[#416B9A] hover:via-[#6bb2ef] hover:to-[#416B9A] ${active === item.cat ? "bg-gradient-to-r from-[#416B9A] via-[#6bb2ef] to-[#416B9A]" : 'bg-[#416B9A]'}`}
        //                     key={item.cat}>{item.title}
        //                 </button>
        //             ))
        //         }
        //     </div>
        //     <div className="grid grid-cols-12 bg-[#51a6f053] rounded-b-md gap-2 p-2 shadow-lg shadow-[#51a6f092]">
        //         {
        //             skill.map((item) => (
        //                 <TechItems
        //                     key={item.id}
        //                     title={item.title}
        //                     svg={item.svg}
        //                     alt={item.alt}
        //                 />
        //             ))
        //         }
        //     </div>
        // </div>
    )
}

TechSkills.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

export default TechSkills