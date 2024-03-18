import PropTypes from "prop-types"

const ContactLink = ({ title, url = '#', icon }) => {

    return (
        <a href={url} className="relative inline-flex items-center justify-center px-0 py-1 md:p-4 md:px-6 md:py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#1ab0ba] rounded-lg md:rounded-full group m-auto">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-[150%] bg-[#1ab0ba] group-hover:translate-x-0 ease text-3xl">
                <svg className="h-7 w-7">{icon}</svg>
            </span>
            <span className="relative flex items-center justify-center w-full h-full text-[#1ab0ba] transition-all duration-300 transform group-hover:translate-x-full ease px-[5rem] text-lg md:text-2xl">{title}</span>

        </a>
    )
}

ContactLink.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.element
}

export default ContactLink