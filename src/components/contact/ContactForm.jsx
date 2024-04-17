import { useEffect, useState } from "react"
import axios from "axios"
import SendButton from "../buttons/SendButton"
import Error from "../error/Error"
import { inputCheck, bulkCheck } from "../../assets/validator"
import { useLanguage } from "../../hooks/useLanguage"

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

    useEffect(() => {
        let timeId
        if(sendStatus === "bad") {
            timeId = setTimeout(() => {
                setSendStatus("")
            }, 3000)
        } else if(sendStatus === "ok") {
            timeId = setTimeout(() => {
                setSendStatus("")
                resetForm()
            }, 3000)
        }
        return () => clearTimeout(timeId)
    }, [sendStatus])

    return (
        <div className="w-full flex flex-col pt-10 md:py-0 md:px-[2rem] relative">
            <div className="w-full m-auto flex flex-col md:flex-row md:inline-flex md:justify-between xl:pb-[4rem]">
                <div className="w-full md:w-[45%] relative">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`w-full text-xl outline-none py-1 border-b-2 ${nameError ? "border-orange-400" : name ? " border-[#1ab0ba]" : "border-gray-300 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`}
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
                        className={`w-full text-xl outline-none py-1 border-b-2 ${emailError ? "border-red-400" : email ? "border-[#1ab0ba]" : "border-gray-300 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`}
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
                    className={`w-full h-fit text-xl outline-none py-1 border-b-2 ${messageError ? "border-red-400" : message ? "border-[#1ab0ba]" : "border-gray-300 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`}
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
            <SendButton onClick={handleClick} status={sendStatus}/>
        </div>
    )
}

export default ContactForm