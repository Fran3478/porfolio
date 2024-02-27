import ProjectCard from "./ProjectCard"
import data from "../../assets/data/data.json"

const Container = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10 m-auto">
            {
                data.projectData.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        urlImg={item.img}
                        alt={item.alt}
                        description={item.description}
                        deploy={item.deploy}
                        repo={item.repo}
                    />
                ))
            }
        </div>
    )
}

export default Container