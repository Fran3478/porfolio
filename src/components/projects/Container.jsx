import { useLanguage } from "../../hooks/useLanguage"
import ProjectCard from "../cards/ProjectCard"

const Container = () => {
    const { translation } = useLanguage()

    return (
        <div className="grid grid-cols-1 2ml:grid-cols-12 gap-10 place-content-center">
            {/* <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10"> */}
            {
                translation.project.projects_section.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        urlImg={item.img}
                        alt={item.alt}
                        description={item.description}
                        deploy={item.deploy}
                        repo={item.repo}
                        status={item.status}
                    />
                ))
            }
        </div>
    )
}

export default Container