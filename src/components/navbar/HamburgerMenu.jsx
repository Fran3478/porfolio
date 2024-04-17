import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineUser, AiOutlineDownload } from 'react-icons/ai'
import { useLanguage } from "../../hooks/useLanguage"
import pdf_en from "../../assets/pdf/resume_en.pdf"
import pdf_es from "../../assets/pdf/resume_es.pdf"
import PropTypes from "prop-types"

const HamburgerMenu = ({ handleNav }) => {
    const { translation, ln } = useLanguage()
    return (
        <div className='fixed w-full h-screen bg-[#51a6f0] bg-gradient-to-br from-[#51a6f0] to-[#416b9a] flex flex-col justify-center items-center z-[98] md:hidden'>
            <a href='#main' className='w-[70%] sm:w-56 flex justify-center items-center rounded-full shadow-md bg-[#062446] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineHome size={20} />
                <span className='pl-4'>{translation.nav.home}</span>
            </a>
            <a href='#aboutMe' className='w-[70%] sm:w-56 flex justify-center items-center rounded-full shadow-md bg-[#062446] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineUser size={20} />
                <span className='pl-4'>{translation.nav.about}</span>
            </a>
            <a href='#projects' className='w-[70%] sm:w-56 flex justify-center items-center rounded-full shadow-md bg-[#062446] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineProject size={20} />
                <span className='pl-4'>{translation.nav.projects}</span>
            </a>
            <a href='#contact' className='w-[70%] sm:w-56 flex justify-center items-center rounded-full shadow-md bg-[#062446] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineMail size={20} />
                <span className='pl-4'>{translation.nav.contact}</span>
            </a>
            <a href={`${ln === "en" ? pdf_en : ln === "es" && pdf_es}`} target="_blank" rel="noopener noreferrer" className='w-[70%] sm:w-56 flex justify-center items-center rounded-full shadow-md bg-[#062446] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineDownload size={20} />
                <span className='pl-4'>{translation.nav.resume}</span>
            </a>
        </div>
    )
}

HamburgerMenu.propTypes = {
    handleNav: PropTypes.func
}

export default HamburgerMenu