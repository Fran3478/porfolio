import { useState } from "react"

const BackgroundItem = ({ title, dates, description, img }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start">
                    <span className="inline-block px-2 py-1 text-sm lg:text-lg font-semibold text-white bg-[#51A6F0] rounded-md" >{title}</span>
                    <span className="font-normal text-stone-400">{`${dates[0]} - ${dates[1]}`}</span>
                </p>

                {
                    !show ?
                        <p className="my-2 text-sm lg:text-base font-normal text-stone-500">
                            <span>{description.split(' ').slice(0, 15).join(' ') + "..."}</span>
                            <span className="hover:cursor-pointer text-sky-600 underline ml-3" onClick={handleShow}>Show more...</span>
                        </p> :
                        <p className="my-2 text-sm lg:text-base font-normal text-stone-500">
                            <span>{description}</span>
                            <span className="hover:cursor-pointer text-sky-600 underline ml-3" onClick={handleShow}>Show less...</span>
                        </p>
                }
            </li>
        </ol>
    )
}

export default BackgroundItem