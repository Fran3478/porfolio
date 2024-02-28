import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { LuFileDown } from "react-icons/lu";

const SideNavbar = () => {
    return (
        <div className="hidden w-[4rem] h-screen right-0 fixed z-50 md:flex flex-col mr-[2rem]">
            <div className="m-auto text-white text-2xl">
                <a href="#home" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300'>
                    <AiOutlineHome />
                </a>
                <a href="#aboutMe" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300'>
                    <AiOutlineUser />
                </a>
                <a href="#projects" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300'>
                    <AiOutlineProject />
                </a>
                <a href="#contact" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300'>
                    <AiOutlineMail />
                </a>
                <a href="#resume" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-300'>
                    <LuFileDown />
                </a>
            </div>
        </div>
    )
}

export default SideNavbar