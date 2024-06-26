import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import SideNavbar from "./SideNavbar"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

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
                    <button onClick={() => setNav(!nav)} className={`bg-[#062446] bg-opacity-70 rounded-lg p-[0.3rem] fixed mt-4 left-4 z-[99] md:hidden transition-transform duration-300 transform ${showNav ? 'translate-y-0' : '-translate-y-96'}`}>
                        <AiOutlineMenu color='white' size={28} />
                    </button>
                ) : (
                    <button onClick={() => setNav(!nav)} className='bg-[#062446] bg-opacity-70 rounded-lg p-[0.3rem] fixed top-4 left-4 z-[99] md:hidden'>
                        <AiOutlineClose color='white' size={28} />
                    </button>
                )
            }

            {
                nav ? (
                    <HamburgerMenu handleNav={() => setNav(!nav)} />
                ) : (
                    null
                )
            }
            <SideNavbar />
        </div>
    )
}

export default Navbar