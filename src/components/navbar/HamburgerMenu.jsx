import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineUser, AiOutlineDownload } from 'react-icons/ai'
import PropTypes from "prop-types"

const HamburgerMenu = ({ handleNav }) => {
    return (
        <div className='fixed w-full h-screen bg-[#062446] flex flex-col justify-center items-center z-20 md:hidden backdrop-blur-sm'>
            <a href='#main' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineHome size={20} />
                <span className='pl-4'>Home</span>
            </a>
            <a href='#aboutMe' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineUser size={20} />
                <span className='pl-4'>About Me</span>
            </a>
            <a href='#projects' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineProject size={20} />
                <span className='pl-4'>Projects</span>
            </a>
            <a href='#contact' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineMail size={20} />
                <span className='pl-4'>Contact</span>
            </a>
            <a href='#resume' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200' onClick={handleNav}>
                <AiOutlineDownload size={20} />
                <span className='pl-4'>Resume</span>
            </a>
        </div>
    )
}

HamburgerMenu.propTypes = {
    handleNav: PropTypes.func
}

export default HamburgerMenu