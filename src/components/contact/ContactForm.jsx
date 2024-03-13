import { useState } from "react"
import Button from "./Button"
import { GoArrowRight } from "react-icons/go";

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = ({ target }) => {
        const change = target.name
        change === 'name' ?
            setName(target.value) :
            change === "email" ?
                setEmail(target.value) :
                setMessage(target.value)
    }

    return (
        <div className="w-full flex flex-col pt-10 md:py-0 md:px-[2rem]">
            <div className="w-full m-auto flex flex-col md:flex-row md:inline-flex md:justify-between pb-16">
                <div className="w-full md:w-[45%] relative pb-10 md:pb-0">
                    <input id="name" name="name" type="text" className={`w-full text-xl border-b ${name ? "outline-none py-1 border-b-2 border-[#1ab0ba]" : "border-gray-300 focus:outline-none py-1 focus:border-b-2 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`} value={name} onChange={handleChange} />
                    <label htmlFor="name" className={`absolute left-0 cursor-text ${name ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>Name</label>
                </div>
                <div className="md:w-[45%] relative">
                    <input id="email" name="email" type="email" className={`w-full text-xl border-b ${email ? "outline-none py-1 border-b-2 border-[#1ab0ba]" : "border-gray-300 focus:outline-none py-1 focus:border-b-2 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`} value={email} onChange={handleChange} />
                    <label htmlFor="email" className={`absolute left-0 cursor-text ${email ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>Email</label>
                </div>
            </div>
            <div className="w-full m-auto relative pb-16">
                <textarea id="message" name="message" type="textarea" className={`w-full h-fit text-xl border-b ${message ? "outline-none py-1 border-b-2 border-[#1ab0ba]" : "border-gray-300 focus:outline-none py-1 focus:border-b-2 focus:border-[#1ab0ba]"} transition-colors duration-300 peer`} value={message} onChange={handleChange} />
                <label htmlFor="message" className={`absolute left-0 cursor-text ${message ? "text-xs -top-4 peer-focus:text-[#1ab0ba]" : "top-1 text-gray-500 text-lg peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#1ab0ba]"} transition-all duration-300`}>Message</label>
            </div>
            <div className="flex justify-center">
                <Button icon={<GoArrowRight />} title={"Send"} />
            </div>
        </div>
    )
}

export default ContactForm