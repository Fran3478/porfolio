import { useState } from "react"
import axios from "axios"
import ContactButton from "../buttons/ContactButton"
import Error from "../error/Error"
import { AiOutlineSend } from "react-icons/ai"
import { inputCheck, bulkCheck } from "../../assets/validator"
import { useLanguage } from "../../hooks/useLanguage"
import Loading from "./Loading"

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [messageError, setMessageError] = useState("")
    const [sendStatus, setSendStatus] = useState("")

    const { translation } = useLanguage()

    const defineError = ({name, error}) => {
        if (name === "name") setNameError(error === "not_found" ? translation.error.name : "")
        if (name === "email") setEmailError(error ? translation.error.email[error] : "")
        if (name === "message") setMessageError(error === "not_found" ? translation.error.message : "")
    }

    const { translation } = useLanguage()

    const checkErrors = ({ name, value }) => {
        const error = inputCheck(name, value)
        defineError({name, error})
    }
    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        if (name === "name") {
            setName(value)
        }
        if (name === "email") {
            setEmail(value)
        }
        if (name === "message") {
            setMessage(value)
        }
        checkErrors({ name, value })
    }
    const handleFocusOut = ({ target }) => {
        const name = target.name
        const value = target.value
        checkErrors({ name, value })
    }
    const handleClick = () => {
        const fields = [
            {
                field: "name",
                value: name,
                error: defineError
            },
            {
                field: "email",
                value: email,
                error: defineError
            },
            {
                field: "message",
                value: message,
                error: defineError
            }
        ]
        const passCheck = bulkCheck(fields)
        const text = `New contact!%0AName: ${name || "not provided"}%0AEmail: ${email}%0AMessage: ${message}`
        if (passCheck) {
            setSendStatus("loading")
            axios.get(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${text}&parse_mode`)
                .then(response => {
                    setSendStatus("ok")
                    console.log(response)
                }).catch(err => {
                    setSendStatus("bad")
                    console.log(err)
                })
        }
    }
    const resetForm = () => {
        setSendStatus("")
        setName("")
        setEmail("")
        setMessage("")
    }

    const handleStatus = () => {
        sendStatus === "bad" ? 
            setSendStatus("") :
            resetForm()
    }

    return (
        <div className="w-full flex flex-col pt-10 md:py-0 md:px-[2rem] relative">
            <div className="w-full m-auto flex flex-col md:flex-row md:inline-flex md:justify-between pb-16">
                <div className="w-full md:w-[45%] relative">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`w-full text-xl border-b ${name ? "outline-none py-1 border-b-2 border-[#1ab0ba]" : "border-gray-300 focus:outline-none py-1 focus:border-b-2 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`}
                        value={name}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                    />
                    <label htmlFor="name" className={`absolute left-0 cursor-text ${name ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>{translation.contact.form.name}</label>
                    <div className="h-[2.5rem]">
                        {
                            nameError && <Error text={nameError} type={"warning"} />
                        }
                    </div>
                </div>
                <div className="md:w-[45%] relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={`w-full text-xl border-b ${email ? "outline-none py-1 border-b-2 border-[#1ab0ba]" : "border-gray-300 focus:outline-none py-1 focus:border-b-2 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`}
                        value={email}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                    />
                    <label htmlFor="email" className={`absolute left-0 cursor-text ${email ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>Email</label>
                    <div className="h-[2.5rem]">
                        {
                            emailError && <Error text={emailError} type={"fail"} />
                        }
                    </div>
                </div>
            </div>
            <div className="w-full m-auto relative">
                <textarea
                    id="message"
                    name="message"
                    type="textarea"
                    className={`w-full h-fit text-xl border-b ${message ? "outline-none py-1 border-b-2 border-[#1ab0ba]" : "border-gray-300 focus:outline-none py-1 focus:border-b-2 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`}
                    value={message}
                    onChange={handleChange}
                    onBlur={handleFocusOut}
                />
                <label htmlFor="message" className={`absolute left-0 cursor-text ${message ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>{translation.contact.form.message}</label>
                <div className="h-[4rem]">
                    {
                        messageError && <Error text={messageError} type={"fail"} />
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <ContactButton icon={<AiOutlineSend />} title={translation.contact.send_button} onClick={handleClick} />
            </div>
            {
                sendStatus && <Loading status={sendStatus} handleClick={handleStatus} />
            }
            {/* {
                sendStatus === "loading" ?
                    <div className="absolute inset-0 md:inset-x-0 md:inset-y-0 bg-white/70">
                    <div className="flex flex-col md:justify-center w-full h-[11rem] ml:w-[40rem] ml:h-[15rem] m-auto rounded-md bg-white shadow-lg relative">
                    <svg aria-hidden="true" className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] m-auto text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                </div>
                    : sendStatus === "bad" ? 
                    <div className="absolute inset-0 md:inset-x-0 md:inset-y-0 bg-white/70">
                        <div className="flex flex-col md:justify-center w-full h-[11rem] ml:w-[40rem] ml:h-[15rem] m-auto rounded-md bg-red-100 shadow-lg relative">
                            <button onClick={() => setSendStatus("")} className="absolute top-0 right-0 m-[0.6rem] bg-slate-400 hover:bg-slate-200 p-[0.2rem] rounded-lg text-2xl"><AiOutlineClose/></button>
                            <span className="text-[3rem] md:text-[5rem] text-[#ee0010] mx-auto mt-[1rem]"><AiOutlineCloseCircle/></span>
                            <p className="text-[#ee0010] text-base px-[1rem] md:text-xl mx-auto mt-[1rem]">{translation.error.send.bad}</p>
                        </div>
                    </div>
                    : sendStatus === "ok" &&
                    <div className="absolute inset-0 md:inset-x-0 md:inset-y-0 bg-white/70">
                        <div className="flex flex-col md:justify-center w-full h-[11rem] ml:w-[40rem] ml:h-[15rem] m-auto rounded-md bg-green-100 shadow-lg relative">
                            <button onClick={() => setSendStatus("")} className="absolute top-0 right-0 m-[0.6rem] bg-slate-400 hover:bg-slate-200 p-[0.2rem] rounded-lg text-2xl"><AiOutlineClose/></button>
                            <span className="text-[3rem] md:text-[5rem] text-[#45a974] mx-auto"><AiOutlineCheckCircle/></span>
                            <p className="text-[#45a974] text-base px-[1rem] md:text-xl mx-auto mt-[1rem]">{translation.error.send.ok}</p>
                        </div>
                    </div>
            } */}
        </div>
    )
}

export default ContactForm