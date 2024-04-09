import PropTypes from "prop-types"

const Status = ({ status }) => {
    return (
        <div className={`${status.control === "finished" ? "bg-green-600 text-green-200" : status.control === "on development" && "bg-yellow-500 text-yellow-100"} rounded-full w-fit flex my-[0.4rem] self-end py-[0.2rem]`}>
            <div className={`${status.control === "finished" ? "bg-green-200" : status.control === "on development" && "bg-yellow-100"} h-2 w-2 rounded-full m-auto mx-[0.4rem]`} />
            <p className="col-span-4 col-start-2 text-sm mr-[0.6rem]">{status.title}</p>
        </div>
    )
}

Status.propTypes = {
    status: PropTypes.object
}

export default Status