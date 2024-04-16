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
        <div className="absolute right-0 m-[2rem] z-40">
            <label className="flex items-center relative w-max cursor-pointer select-none">
                <input 
                    type="checkbox"
                    className="appearance-none transition-colors cursor-pointer w-16 h-9 rounded-full outline-none bg-[#416b9a]"
                    checked={isChecked}
                    onChange={handleInput}
                />
                <p className="absolute flex items-center w-full justify-between px-3" >
                    <span className={`font-medium text-xs uppercase transition-colors ${isChecked ? "text-gray-200" : "text-[#416b9a]"}`}> Es </span>
                    <span className={`font-medium text-xs uppercase transition-colors ${!isChecked ? "text-gray-200" : "text-[#416b9a]"}`}> En </span>
                </p>
                <div className={`w-7 h-7 left-1 absolute rounded-full transform transition-transform duration-500 bg-gray-200 uppercase drop-shadow-md flex ${isChecked && "translate-x-7" }`}>
                    <span className="text-[#416b9a] text-sm font-bold m-auto" >{`${isChecked ? "en" : "es"}`}</span>
                </div>
            </label>
        </div>
    )
}

export default SwitchLanguage