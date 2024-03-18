import PropTypes from "prop-types"
import { AiOutlineInfoCircle, } from 'react-icons/ai'

const Status = ({ text, iconSize = "" }) => {

    return (
        <div className="w-fit px-4 flex flex-col rounded-md  md:rounded-full md:flex-row py-2 font-semibold text-blue-400 border-2 border-blue-400 bg-blue-50" >
            <span className="place-self-center pr-3"><AiOutlineInfoCircle size={!iconSize && "1.5rem"} /></span>
            <span>{text}</span>
        </div>
    )
}

Status.propTypes = {
    text: PropTypes.string,
    iconSize: PropTypes.string
}

export default Status