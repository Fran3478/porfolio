import { useState } from "react"
import { useLanguage } from "../../hooks/useLanguage"

const SwitchLanguage = () => {
    const {ln, changeLn} = useLanguage()
    const [isChecked, setIsChecked] = useState(ln === "en" ? true : false)
    const handleInput = () => {
        changeLn()
        setIsChecked(!isChecked)
    }

    return(
        <div className="absolute right-0 m-[2rem] z-50">
            <label className="flex items-center relative w-max cursor-pointer select-none">
                <input 
                    type="checkbox"
                    className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-[#416b9a]"
                    checked={isChecked}
                    onChange={handleInput}
                />
                <span className="absolute font-medium text-xs uppercase right-1 text-white mr-1"> En </span>
                <span className="absolute font-medium text-xs uppercase right-8 text-white ml-1"> Es </span>
                <span className={`w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200 ${isChecked && "translate-x-7" }`} />
            </label>
        </div>
    )
}

export default SwitchLanguage