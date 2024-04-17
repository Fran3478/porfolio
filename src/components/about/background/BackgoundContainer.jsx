import { useLanguage } from "../../../hooks/useLanguage"
import BackgroundItem from "./BackgroundItem"

const BackgroundContainer = () => {
    const { translation } = useLanguage()

    return (
        <div className="pt-5 ml:pt-0">
            <div className="shadow-lg rounded-lg bg-[#ace9c368] p-5 ml:p-7">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-5">{translation.about.background_section.title}</h2>
                {
                    translation.about.background_section.knowledge.map((item) => (
                        <BackgroundItem
                            key={item.id}
                            title={item.title}
                            dates={item.dates}
                            description={item.description}
                            urlImg={item.img}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BackgroundContainer