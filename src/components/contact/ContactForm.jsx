import { useState } from "react"
import axios from "axios"
import ContactButton from "../buttons/ContactButton"
import Error from "../error/Error"
import { AiOutlineSend } from "react-icons/ai"
import { inputCheck, bulkCheck } from "../../assets/validator"

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [messageError, setMessageError] = useState("")

    const checkErrors = ({ name, value }) => {
        if (name === "name") {
            setNameError(inputCheck(name, value))
        }
        if (name === "email") {
            setEmailError(inputCheck(name, value))
        }
        if (name === "message") {
            setMessageError(inputCheck(name, value))
        }
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
                error: setNameError
            },
            {
                field: "email",
                value: email,
                error: setEmailError
            },
            {
                field: "message",
                value: message,
                error: setMessageError
            }
        ]
        const passCheck = bulkCheck(fields)
        if (passCheck) {
            axios.post(import.meta.env.VITE_SERVER_URL, {
                name,
                email,
                message
            }).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div className="w-full flex flex-col pt-10 md:py-0 md:px-[2rem]">
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
                    <label htmlFor="name" className={`absolute left-0 cursor-text ${name ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>Name</label>
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
                <label htmlFor="message" className={`absolute left-0 cursor-text ${message ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>Message</label>
                <div className="h-[4rem]">
                    {
                        messageError && <Error text={messageError} type={"fail"} />
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <ContactButton icon={<AiOutlineSend />} title={"Send"} onClick={handleClick} />
            </div>
        </div>
    )
}

export default ContactForm