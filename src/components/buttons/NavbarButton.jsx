import PropTypes from "prop-types"

const NavbarButton = ({ url, icon, downloadable = false }) => {

    const displayButton = downloadable ? <a href={url} target="_blank" rel="noopener noreferrer" className='bg-[#062446] rounded-full w-fit inline-flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300 mb-[1rem]'>{icon}</a> : <a href={url} className='bg-[#062446] rounded-full w-fit inline-flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300 mb-[1rem]'>{icon}</a>

    return (
        displayButton
    )
}

NavbarButton.propTypes = {
    url: PropTypes.string,
    icon: PropTypes.element,
    downloadable: PropTypes.bool,
    name: PropTypes.string
}

export default NavbarButton