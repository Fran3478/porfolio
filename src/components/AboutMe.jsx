import BackgroundItem from "./BackgroundItem"
import KnowledgeItem from "./KnowledgeItem"

const AboutMe = () => {

    const backgroundData = [
        {
            id: 1,
            title: "Higher Technician in Software Development",
            dates: ["02/2020", "11/2023"],
            description: "I completed my Higher Technician career at the San Jose Higher Institute, where I acquired knowledge not only about programming but also about several methodologies, strategies, and different approaches when solving specific problems."

        },
        {
            id: 2,
            title: "Full Stack Web Developer",
            dates: ["05/2023", "10/2023"],
            description: "I trained as a full stack web developer at Henry's bootcamp, completing over 800 hours of coursework. There, I learned tools and programming languages such as JavaScript, HTML, CSS, PostgreSQL, among others, as well as understanding the importance of fluid and effective communication while working in groups composed of people from different nationalities."

        }
    ]
    const knowledgeData = [
        {
            id: 1,
            title: "",
            img: ""
        }
    ]
    return (
        <div id="aboutMe" className="max-h-screen h-screen w-full m-auto grid grid-rows-2 xl:pr-20 xl:grid-cols-2">
            <div className=" xl:col-span-2 ml-16 mt-16">
                <div className="xl:col-start-1 w-2/3">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold mb-8">Background</h1>
                    {
                        backgroundData.map((item) => (
                            <BackgroundItem
                                key={item.id}
                                title={item.title}
                                dates={item.dates}
                                description={item.description}
                                img={item.img}
                            />
                        ))
                    }
                </div>
            </div>
            <div className=" xl:col-span-2">
                <div className="col-start-2 w-2/3">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold mb-8">Technology Stack</h1>
                    {
                        knowledgeData.map((item) => (
                            <KnowledgeItem
                                key={item.id}
                                title={item.title}
                                img={item.img}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutMe