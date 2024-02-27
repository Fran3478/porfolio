import BackgroundItem from "./background/BackgroundItem"
import Container from "./tech/Container"
import data from "../../assets/data/data.json"

const AboutMe = () => {

    return (
        <div id="aboutMe" className="text-center sm:text-left min-h-fit h-full w-full m-auto ">
            <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-2 m-auto mt-6 mx-[2rem] sm:ml-[3.8rem] sm:mr-[3.8rem] md:mt-10 md:mr-[8rem]">
                <div className="sm:col-span-10 sm:col-start-3 md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-7">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold">Tech Skills</h1>
                    <Container />
                </div>
                <div className="md:row-start-2 md:col-span-9 lg:col-span-8 xl:col-span-6 pb-10">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold my-8">Background</h1>
                    {
                        data.knowledge.map((item) => (
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
        </div>
    )
}

export default AboutMe