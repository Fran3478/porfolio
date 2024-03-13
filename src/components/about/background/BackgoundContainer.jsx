import data from "../../../assets/data/data.json"
import BackgroundItem from "./BackgroundItem"
import { useState } from "react"


const BackgroundContainer = () => {
    const [show, setShow] = useState(0)
    const handleShow = (val) => {
        setShow(val)
    }

    return (
        <div className="pt-5 ml:pt-0">
            <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg bg-[#ace9c368] p-5 ml:p-7">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-5">Background</h2>
                {
                    data.knowledge.map((item) => (
                        <BackgroundItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            dates={item.dates}
                            description={item.description}
                            urlImg={item.img}
                            show={show}
                            handleShow={handleShow}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BackgroundContainer