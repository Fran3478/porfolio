import PropTypes from 'prop-types'
const SkillItem = ({ title, svg, alt }) => {
    return (
        <div className="flex flex-col shadow-md rounded-md bg-white/20 py-[0.3rem]">
            <div className="h-full">
                <img src={svg} alt={alt} className='max-w-[4rem] max-h-[5rem] w-full h-full m-auto aspect-square' />
            </div>
            <p className='text-sm text-center' >{title}</p>
        </div>
    )
}

SkillItem.propTypes = {
    title: PropTypes.string,
    svg: PropTypes.string,
    alt: PropTypes.string
}

export default SkillItem