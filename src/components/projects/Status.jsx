import PropTypes from "prop-types"

const Status = ({ status }) => {
    return (
        <div className={`${status.control === "finished" ? "bg-green-600 text-green-200" : status.control === "on development" && "bg-yellow-500 text-yellow-100"} rounded-full w-fit grid grid-cols-5 my-2 mr-3 self-end py-[0.2rem] px-[0.6rem]`}>
            <div className={`${status.control === "finished" ? "bg-green-200" : status.control === "on development" && "bg-yellow-100"} h-2 w-2 rounded-full m-auto`} />
            <p className="col-span-4 col-start-2 text-sm font-medium">{status.title}</p>
        </div>
    )
}

Status.propTypes = {
    status: PropTypes.object
}

export default Status