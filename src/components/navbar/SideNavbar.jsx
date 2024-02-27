import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { LuFileDown } from "react-icons/lu";

const SideNavbar = () => {
    return (
        <div className="hidden w-[4rem] h-screen right-0 fixed z-50 md:flex flex-col mr-[2rem]">
            <div className="m-auto text-white text-2xl">
                <a href="#home" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 transition-all duration-300'>
                    <AiOutlineHome />
                </a>
                <a href="#aboutMe" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 transition-all duration-300'>
                    <AiOutlineUser />
                </a>
                <a href="#projects" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 transition-all duration-300'>
                    <AiOutlineProject />
                </a>
                <a href="#contact" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 transition-all duration-300'>
                    <AiOutlineMail />
                </a>
                <a href="#resume" className='bg-[#062446] rounded-full w-fit flex m-2 p-4 cursor-pointer hover:scale-125 transition-all duration-300'>
                    <LuFileDown />
                </a>
            </div>
        </div>
        // <div className='md:block hidden fixed right-5 top-[25%] z-10'>
        //     <div className='flex flex-col items-end'>
        //         <a href="#home" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer hover:scale-x-100'>
        //             <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>Home</span>
        //             
        //         </a>
        //         <a href="#aboutMe" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-400 hover:scale-x-100'>
        //             <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>About me</span>
        //             <AiOutlineUser size={20} color='white' />
        //         </a>
        //         <a href="#projects" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-x-100'>
        //             <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>Projects</span>
        //             
        //         </a>
        //         <a href="#contact" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-x-100'>
        //             <span className='hidden group-hover:inline-block pr-4 text-white transform transition-transform duration-300 delay-150'>Contact</span>
        //             
        //         </a>
        //         <a href="#resume" className='group rounded-full flex justify-end items-center shadow-md shadow-slate-600 bg-[#062446] m-2 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-x-100'>
        //             <span className='hidden group-hover:block pr-4 text-white transform transition-transform duration-300 delay-150'>Resume</span>
        //             
        //         </a>
        //     </div>
        // </div>
    )
}

export default SideNavbar