import { useLanguage } from "../../../hooks/useLanguage"

const Introduction = () => {
    const { translation } = useLanguage()

    return (
        <div className="flex pt-5">
            <div className="p-5  ml:p-7 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#ace9c368]">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-3">{translation.about.me_section.title}</h2>
                <p className="text-[#062446] tracking-tight leading-tight" >{translation.about.me_section.intro}</p>
            </div>
            {/* {
                !show ?
                    <div className="">
                        <TypeAnimation
                            sequence={[
                                "const sayHi = introduce(myself);\ndocument.write(sayHi);",
                                1500,
                                () => {
                                    setShow(!show)
                                }
                            ]}
                            omitDeletionAnimation={true}
                            wrapper="span"
                            speed={40}
                            style={{
                                fontSize: '1.3em',
                                height: '10rem',
                                width: '45rem',
                                display: 'block',
                                whiteSpace: 'pre-line'
                            }}
                            repeat={0}
                        />
                    </div>
                    :
                    <div className="m-auto p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#ace9c368]">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#062446] font-bold pb-5">Me</h2>
                        <p className="text-[#062446] text-lg text tracking-tight leading-tight" >Hello! I&apos;m Fran, a junior full stack web developer. I delved into the world of programming for the first time out of curiosity stemming from my hobby of fixing computers.<br />When I discovered the incredible possibilities that programming offers, I loved it so much that I decided to take it to the next level and make programming a part of my life.<br />Aside from coding, in my free time, I enjoy playing video games, reading novels, watching movies and series, and most importantly, spending time with my pets (a dog and 2 kittens).</p>
                    </div>
                // <p>Hola! Soy Fran, un desarrollador web full stack junior. Me introduje en el mundo de la programacion como curiosidad derivada de mi hobbie de reparar computadoras. Cuando me di cuenta de las cosas increibles que se pueden lograr mediante la programacion me encanto tanto que decidi llevarlo al siguiente nivel y volverlo parte de mi vida</p>
            } */}
        </div>
    )
}

export default Introduction