import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import SideNavbar from "./SideNavBar"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleNav = () => {
        setNav(!nav)
    }

    const handleVisibility = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowNav(false)
            } else {
                setShowNav(true)
            }
            setLastScrollY(window.scrollY)
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleVisibility)
            return () => {
                window.removeEventListener('scroll', handleVisibility)
            }
        }
    }, [lastScrollY])

    return (
        <div>
            {
                !nav ? (
                    <AiOutlineMenu onClick={handleNav} className={`fixed w-[1.8rem] mt-4 left-4 z-[99] md:hidden transition-transform duration-300 transform ${showNav ? 'translate-y-0' : '-translate-y-96'}`} color='white' size={28} />
                ) : (
                    <AiOutlineClose onClick={handleNav} className='fixed w-[1.8rem] top-4 left-4 z-[99] md:hidden' color='white' size={28} />
                )
            }

            {
                nav ? (
                    <HamburgerMenu handleNav={handleNav} />
                ) : (
                    null
                )
            }
            <SideNavbar />
        </div>
    )
}

export default Navbar