import BackgroundItem from "./BackgroundItem"
import TechItems from "./TechItems"
import { backgroundData, technologyData } from "../assets/data/data"

const AboutMe = () => {


    return (
        <div id="aboutMe" className="max-h-screen h-screen w-full m-auto flex flex-col md:grid md:grid-rows-2 lg:gap-x-10 md:grid-cols-2">
            <div className="mt-6 mr-8 ml-14 md:m-auto md:ml-16 md:mt-16 justify-center">
                <div className="md:col-start-1 xl:w-2/3">
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
            <div className="mt-6 mr-8 ml-14  md:m-auto md:grid md:grid-cols-subgrid md:gap-6 md:col-span-2 lg:mt-0">
                <div className="md:mt-10 xl:mt-0 md:col-start-2 w-2/3">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#062446] font-extrabold">Tech Skills</h1>
                    <div className="grid grid-cols-3 gap-3 text-center mt-5">
                        <div className="">
                            <h2 className="font-semibold text-base md:text-lg lg:text-2xl text-white bg-[#51A6F0] rounded-md">Front</h2>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                                {
                                    technologyData.filter((obj) => obj.cat === 'front').map((item) => (
                                        <TechItems
                                            key={item.id}
                                            title={item.title}
                                            img={item.img}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        {/* <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div> */}
                        <div>
                            <h2 className="font-semibold text-base md:text-lg lg:text-2xl text-white bg-[#51A6F0] rounded-md">Back</h2>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                                {
                                    technologyData.filter((obj) => obj.cat === 'back').map((item) => (
                                        <TechItems
                                            key={item.id}
                                            title={item.title}
                                            img={item.img}
                                        />
                                    ))
                                }
                            </div>

                        </div>
                        {/* <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div> */}
                        <div>
                            <h2 className="font-semibold text-base md:text-lg lg:text-2xl text-white bg-[#51A6F0] rounded-md">Version Control</h2>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                                {
                                    technologyData.filter((obj) => obj.cat === 'version').map((item) => (
                                        <TechItems
                                            key={item.id}
                                            title={item.title}
                                            img={item.img}
                                            alt={item.alt}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe