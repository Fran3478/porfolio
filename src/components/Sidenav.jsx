import { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiOutlineUser, AiOutlineClose } from 'react-icons/ai'
import { LuFileDown } from "react-icons/lu";

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div>
            {
                !nav ? (
                    <AiOutlineMenu onClick={handleNav} className='absolute top-4 left-4 z-[99] md:hidden' color='white' />
                ) : (
                    <AiOutlineClose onClick={handleNav} className='absolute top-4 left-4 z-[99] md:hidden' color='white' />
                )
            }

            {
                nav ? (
                    <div className='fixed w-full h-screen bg-[#062446] flex flex-col justify-center items-center z-20 md:hidden'>
                        <a href='#main' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href='#aboutMe' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200'>
                            <AiOutlineUser size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a href='#projects' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href='#contact' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                        <a href='#resume' className='w-[70%] sm:w-80 flex justify-center items-center rounded-full shadow-md shadow-slate-600 bg-[#51A6F0] text-white m-2 p-4 cursor-pointer active:scale-110 ease-in duration-200'>
                            <LuFileDown size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>
                    </div>
                ) : (
                    null
                )
            }
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
        </div>
    )
}

export default Sidenav