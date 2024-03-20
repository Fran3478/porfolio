import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineUser, AiOutlineFilePdf } from 'react-icons/ai'
import NavbarButton from '../buttons/NavbarButton';
import { useLanguage } from "../../hooks/useLanguage"
import pdf_en from "../../assets/pdf/resume_en.pdf"
import pdf_es from "../../assets/pdf/resume_es.pdf"

const SideNavbar = () => {
    const { ln } = useLanguage()
    const buttons = [
        {
            url: "#home",
            title: "Home",
            icon: <AiOutlineHome />
        },
        {
            url: "#aboutMe",
            title: "About me",
            icon: <AiOutlineUser />
        },
        {
            url: "#projects",
            title: "Projects",
            icon: <AiOutlineProject />
        },
        {
            url: "#contact",
            title: "Contact",
            icon: <AiOutlineMail />
        },
        {
            url: ln === "en" ? pdf_en : ln === "es" && pdf_es,
            downloadable: true,
            name: "Resume-Francisco Hernandez.pdf",
            title: "Resume",
            icon: <AiOutlineFilePdf />
        }
    ]
    return (
        <div className="hidden w-[4rem] h-screen right-0 fixed z-50 md:flex flex-col mr-[2rem]">
            <div className="m-auto text-white text-2xl">
                {
                    buttons.map((button) => (
                        button.downloadable ? <NavbarButton key={button.url} url={button.url} icon={button.icon} downloadable name={button.name} /> : <NavbarButton key={button.url} url={button.url} icon={button.icon} />
                    ))
                }
            </div>
        </div>
    )
}

export default SideNavbar