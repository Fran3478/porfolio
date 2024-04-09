import PropTypes from "prop-types"

const ProjectButton = ({ url, ico }) => {
    const displayButton = url ?
        <a className="text-[#8ac3f5] border-2 border-[#8ac3f5] rounded-full text-2xl md:text-3xl lg:text-4xl p-2 hover:scale-110 hover:bg-[#8ac3f5] hover:text-[#155561] ease-in-out transition-all duration-300" href={url} target="_blank" rel="noreferrer">{ico}</a>
        :
        <p className="bg-[#a1b1c0] rounded-full text-2xl md:text-3xl lg:text-5xl p-2 cursor-not-allowed">{ico}</p>
    return (
        displayButton
    )
}

ProjectButton.propTypes = {
    url: PropTypes.string,
    ico: PropTypes.element
}

export default ProjectButton