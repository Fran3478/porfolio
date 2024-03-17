import PropTypes from "prop-types"
import { AiOutlineInfoCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from 'react-icons/ai'

const Status = ({ text, type, iconSize = "" }) => {
    const icon = type === "info" ? <AiOutlineInfoCircle size={!iconSize && "1.5rem"} /> : type === "warning" ? <AiOutlineExclamationCircle size={!iconSize && "1.5rem"} /> : <AiOutlineCloseCircle size={!iconSize && "1.5rem"} />

    return (
        <div className={`w-fit px-4 flex flex-col rounded-md  md:rounded-full md:flex-row py-2 font-semibold ${type === "info" ? "text-blue-400 border-2 border-blue-400 bg-blue-50" : type === "warning" ? "" : ""}`} >
            <span className="place-self-center pr-3">{icon}</span>
            <span>{text}</span>
        </div>
    )
}

Status.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(["warning", "fail", "info"]),
    iconSize: PropTypes.string
}

export default Status