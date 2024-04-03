import PropTypes from "prop-types"

const ProjectButton = ({ url, ico }) => {
    const displayButton = url ?
        <a className="bg-[#51A6F0] rounded-full text-2xl md:text-3xl lg:text-5xl p-2 hover:scale-110 hover:contrast-125 ease-in-out transition-all duration-300" href={url} target="_blank" rel="noreferrer">{ico}</a>
        :
        <p className="bg-[#a1b1c0] rounded-full text-2xl md:text-3xl lg:text-5xl p-2">{ico}</p>
    return (
        displayButton
    )
}

ProjectButton.propTypes = {
    url: PropTypes.string,
    ico: PropTypes.element
}

export default ProjectButton