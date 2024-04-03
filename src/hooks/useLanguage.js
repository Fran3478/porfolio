import { useContext } from "react"
import { LanguageContext } from "../context/language"
import data from "../assets/data/data.json"

export const useLanguage = () => {
    const { ln, setLn } = useContext(LanguageContext)

    const changeLn = () => {
        setLn(ln === "en" ? "es" : "en")
    }

    const translation = data[ln]

    return { ln, changeLn, translation }
}