import BackgroundItem from "./background/BackgroundItem"
import Container from "./tech/Container"
import data from "../../assets/data/data.json"

const AboutMe = () => {

    return (
        <div id="aboutMe" className="text-center sm:text-left min-h-fit h-full w-full m-auto bg-[#ace9c368] ">
            <div className="m-auto py-6 mx-[2rem] sm:ml-[3.8rem] sm:mr-[3.8rem] md:py-10 md:mr-[8rem]">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold">About</h1>
                <div className="grid grid-cols-12 md:grid-rows-2">
                    <div className="pt-4 md:pt-0 col-span-12 md:col-span-11 md:col-start-2 lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-7">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-5">Tech Skills</h2>
                        <Container />
                    </div>
                    <div className="pt-4 md:pt-0 row-start-2 col-span-12 md:col-span-11 md:col-start-2 lg:col-span-8 xl:col-span-6">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-5">Background</h2>
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
        </div>
    )
}

export default AboutMe