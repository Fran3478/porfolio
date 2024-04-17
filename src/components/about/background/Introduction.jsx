import { useLanguage } from "../../../hooks/useLanguage"

const Introduction = () => {
    const { translation } = useLanguage()

    return (
        <div className="flex pt-5">
            <div className="p-5  ml:p-7 rounded-lg shadow-lg bg-[#ace9c368]">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-3">{translation.about.me_section.title}</h2>
                <p className="text-[#062446] tracking-tight leading-tight" >{translation.about.me_section.intro}</p>
            </div>
        </div>
    )
}

export default Introduction