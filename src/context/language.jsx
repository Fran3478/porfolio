import { createContext, useState } from "react"
import PropTypes from "prop-types"

const checkLanguage = () => {
    const browserLn = navigator.language || navigator.userLanguage
    if (browserLn.includes("es")) return "es"
    else return "en"
}

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [ln, setLn] = useState(checkLanguage)

    return (
        <LanguageContext.Provider value={{ ln, setLn }}>
            {children}
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}