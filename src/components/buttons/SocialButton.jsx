import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp  } from "react-icons/ai";

const SocialButton = () => {

    return(
        <div className="flex w-[10rem] sm:w-[15rem] justify-between m-auto mt-[2rem] text-white text-[1.6rem] sm:text-[2.5rem]">
            <a className="rounded-full p-[0.5rem] hover:bg-[#0a66c2] hover:scale-110 transition duration-300" href="https://www.linkedin.com/in/franciscohv" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
            <a className="rounded-full p-[0.5rem] hover:bg-black hover:scale-110 transition duration-300" href="https://github.com/Fran3478" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
            <a className="rounded-full p-[0.5rem] hover:bg-[#25d366] hover:scale-110 transition duration-300" href="https://api.whatsapp.com/send?phone=543794019929" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a>
        </div>
    )
}

export default SocialButton