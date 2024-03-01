import PropTypes from "prop-types"

const Button = ({ url, icon }) => {

    return (
        <a href={url} className='bg-[#062446] rounded-full w-fit inline-flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300 mb-[1rem]'>
            {icon}
        </a>
    )
}

Button.propTypes = {
    url: PropTypes.string,
    icon: PropTypes.element
}

export default Button