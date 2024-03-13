import PropTypes from "prop-types"

const Status = ({ status }) => {
    return (
        <div className={`${status === "finished" ? "bg-green-600 text-green-200" : status === "working on" ? "bg-yellow-500 text-yellow-100" : "bg-red-700 text-red-200"} rounded-full w-fit grid grid-cols-5 my-2 mr-3 self-end py-[0.2rem] px-[0.6rem]`}>
            <div className={`${status === "finished" ? "bg-green-200" : status === "working on" ? "bg-yellow-100" : "bg-red-200"} h-2 w-2 rounded-full m-auto`} />
            <p className="col-span-4 col-start-2 text-sm font-medium">{status}</p>
        </div>
    )
}

Status.propTypes = {
    status: PropTypes.string
}

export default Status