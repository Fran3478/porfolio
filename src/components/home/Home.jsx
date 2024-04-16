import SocialButton from "../buttons/SocialButton"
import SwitchLanguage from "../buttons/SwitchLanguage"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div id='home' className="bg-[#062446] flex min-w-screen w-screen min-h-screen h-screen flex-col md:flex-row overflow-hidden relative">
      <div className="w-full h-2/3 flex items-center sm:relative md:h-full md:w-2/3 select-none">
        <motion.div
          initial={{
            opacity: 0,
            y: -200
          }}
          whileInView={{
            transition: {
              duration: 0.5,
              delay: 0.2
            },
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="w-fit m-auto text-center px-[1rem] md:px-[5rem]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Francisco Hernandez</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 md:my-10 leading-normal">Full Stack Developer</h2>
          <SocialButton/>
        </motion.div>
      </div>
      <div className="flex md:flex-col justify-center md:justify-normal bg-transparent w-full h-1/3 md:h-full md:w-1/3 relative select-none">
        <div className="md:absolute md:inset-x-10 md:inset-y-0 bg-[#51A6F0] w-[190%] md:skew-x-[-20deg] md:origin-center"></div>
        <motion.div
        initial={{
          opacity: 0,
          y: 200
        }}
        whileInView={{
          transition: {
            duration: 0.5
          },
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
          className="absolute -top-1/4 sm:-top-20 md:-left-[15%] md:top-[calc(50vh-104px)] lg:top-[calc(50vh-144px)] rounded-full border-8 border-[#65a3f2] bg-[#416B9A] overflow-hidden drop-shadow-lg"
        >
          <img className="pointer-events-none w-[12rem] h-[12rem] lg:w-[17rem] lg:h-[17rem] aspect-square object-cover drop-shadow-lg" src="https://res.cloudinary.com/dacbde3so/image/upload/v1710809019/portfolio-img/jhxhwyvlwl73to5ny4la.webp" alt="photo" />
        </motion.div>
      </div>
      <SwitchLanguage/>
    </div>
  )
}

export default Home