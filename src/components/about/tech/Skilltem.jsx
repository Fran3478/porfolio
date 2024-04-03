import PropTypes from 'prop-types'
const SkillItem = ({ title, svg, alt }) => {
    return (
        <div className="flex flex-col shadow-md rounded-md bg-white/20 py-[0.3rem]">
            <div className="h-full">
                <img src={svg} alt={alt} className='max-w-[4rem] max-h-[5rem] w-full h-full m-auto aspect-square' />
            </div>
            <p className='text-sm text-center' >{title}</p>
        </div>
        // <div className="flex flex-col text-center max-w-[6rem] w-full max-h-[6rem] h-full m-auto mt-auto shadow-md rounded-md px-[1rem] pt-[0.3rem] bg-white/20">
        //     <img src={svg} alt={alt} className="max-w-[4rem] max-h-[5rem] w-full h-full m-auto" />
        //     <p className="text-sm">{title}</p>
        // </div>
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