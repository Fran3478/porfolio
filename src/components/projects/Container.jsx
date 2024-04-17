import { useLanguage } from "../../hooks/useLanguage"
import ProjectCard from "../cards/ProjectCard"
import { motion } from "framer-motion"

const Container = () => {
    const { translation } = useLanguage()
    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                duration:0.3,
                delay: i * 0.2
            }
        }),
        hidden: {
            opacity: 0,
            y: 100
        }
    }

    return (
        <div
            className="grid grid-cols-1 2ml:grid-cols-12 gap-10 place-content-center"
        >
            {
                translation.project.projects_section.map((item, i) => (
                    <motion.div
                        key={item.id}
                        className="col-span-1 2ml:col-span-6 15xl:col-span-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true
                        }}
                        custom={i}
                        variants={variants}
                    >
                        <ProjectCard
                            title={item.title}
                            urlImg={item.img}
                            alt={item.alt}
                            description={item.description}
                            deploy={item.deploy}
                            repo={item.repo}
                            status={item.status}
                        />
                    </motion.div>
                ))
            }
        </div>
    )
}

export default Container