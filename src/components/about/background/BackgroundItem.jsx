import { useState } from "react"
import PropTypes from "prop-types"

const BackgroundItem = ({ title, dates, description }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-[#416B9A]">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#416B9A] rounded-full mt-1.5 -left-1.5 border-[#416B9A]" />
                <p className="font-normal text-[#416B9A]">{`${dates[0]} - ${dates[1]}`}</p>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start">
                    <span className="inline-block px-2 py-1 text-sm lg:text-lg font-semibold bg-[#51a6f04e] rounded-md text-[#416B9A]" >{title}</span>
                </p>

                {
                    !show ?
                        <div>
                            <p className="my-2 text-sm lg:text-base font-normal text-[#062446]">
                                <span className="line-clamp-1 sm:line-clamp-2 lg:line-clamp-none">{description.split(' ').slice(0, 30).join(' ') + '...'}</span>
                            </p>
                            <p className="hover:cursor-pointer text-sky-600 underline w-fit" onClick={handleShow}>Show more...</p>
                        </div>
                        :
                        <div>
                            <p className="my-2 text-sm lg:text-base font-normal text-[#062446]">
                                <span>{description}</span>
                            </p>
                            <p className="hover:cursor-pointer text-sky-600 underline" onClick={handleShow}>Show less...</p>
                        </div>
                }
            </li>
        </ol>
    )
}

BackgroundItem.propTypes = {
    title: PropTypes.string,
    dates: PropTypes.array,
    description: PropTypes.string
}

export default BackgroundItem