import PropTypes from 'prop-types'
const SkillItem = ({ title, svg, alt }) => {
    return (
        <div className="flex flex-col text-center max-w-[4rem] w-full max-h-[6rem] h-full m-auto mt-auto">
            <img src={svg} alt={alt} className="max-w-[4rem] max-h-[5rem] w-full h-full m-auto" />
            <p className="text-sm">{title}</p>
        </div>
        // <div className="flex flex-col text-center max-w-[6rem] w-full m-auto items-stretch">
        //     <img src={svg} alt={alt} className="max-w-[4rem] w-[100%] aspect-square object-scale-down self-center" />
        //     <p className="text-sm sm:text-base font-semibold mt-2 min-w-fit">{title}</p>
        // </div>
    )
}

SkillItem.propTypes = {
    title: PropTypes.string,
    svg: PropTypes.string,
    alt: PropTypes.string
}

export default SkillItem