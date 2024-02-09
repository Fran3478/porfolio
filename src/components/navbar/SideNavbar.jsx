import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { LuFileDown } from "react-icons/lu";

const SideNavbar = () => {
    return (
        <div className='md:block hidden fixed right-5 top-[25%] z-10'>
            <div className='flex flex-col items-end'>
                <a href="#home" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer hover:scale-x-100'>
                    <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>Home</span>
                    <AiOutlineHome size={20} color='white' />
                </a>
                <a href="#aboutMe" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-400 hover:scale-x-100'>
                    <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>About me</span>
                    <AiOutlineUser size={20} color='white' />
                </a>
                <a href="#projects" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-x-100'>
                    <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>Projects</span>
                    <AiOutlineProject size={20} color='white' />
                </a>
                <a href="#contact" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-x-100'>
                    <span className='hidden group-hover:inline-block pr-4 text-white transform transition-transform duration-300 delay-150'>Contact</span>
                    <AiOutlineMail size={20} color='white' />
                </a>
                <a href="#resume" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-x-100'>
                    <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>Resume</span>
                    <LuFileDown size={20} color='white' />
                </a>
            </div>
        </div>
    )
}

export default SideNavbar