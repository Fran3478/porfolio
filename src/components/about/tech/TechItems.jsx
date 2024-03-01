import PropTypes from 'prop-types'
const TechItems = ({ title, svg, alt }) => {
    return (
        <div className="col-span-4 sm:row-span-3 sm:col-span-3 lg:col-span-3 flex flex-col text-center max-w-[6rem] w-full m-auto items-stretch">
            <img src={svg} alt={alt} className="max-w-[4rem] w-[100%] aspect-square object-scale-down self-center" />
            <p className="text-sm sm:text-base font-semibold mt-2 min-w-fit">{title}</p>
        </div>
    )
}

TechItems.propTypes = {
    title: PropTypes.string,
    svg: PropTypes.string,
    alt: PropTypes.string
}

export default TechItems