import { TypeAnimation } from "react-type-animation"

const Home = () => {
  return (
    <div id='home' className="bg-[#062446] flex w-screen h-screen flex-col md:flex-row overflow-hidden">
      <div className="w-full h-2/3 flex items-center sm:items-start sm:relative md:h-full md:w-2/3 select-none">
        <div className="m-14 text-center top-1/4 sm:absolute sm:text-left sm:mr-24 sm:ml-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl lg:mr-20 font-extrabold text-white">Francisco Hernandez</h1>
          <h2 className="text-xs my-5 lg:text-xl font-bold text-white/80 md:my-10 leading-normal">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer"
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={0}
            />
          </h2>
        </div>
        <div></div>
      </div>
      <div className="flex md:flex-col justify-center md:justify-normal bg-transparent w-full h-1/3 md:h-full md:w-1/3 relative select-none">
        <div className="md:absolute md:inset-x-10 md:inset-y-0 bg-[#51A6F0] w-[190%] md:skew-x-[-20deg] md:origin-center"></div>
        <div className="absolute w-52 -top-1/4 my-5 sm:-top-20 md:-left-[15%] md:top-80 rounded-full border-8 border-[#65a3f2] bg-[#416B9A] overflow-hidden md:w-2/3">
          <img className="pointer-events-none aspect-square object-cover" src="https://res.cloudinary.com/dacbde3so/image/upload/v1707321696/portfolio-img/qwcbzj4yuthlx6xkdmni.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home