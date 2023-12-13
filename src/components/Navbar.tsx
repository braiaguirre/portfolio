import { useTranslation } from "react-i18next"
import { LANGUAGES } from "../constants"

const Navbar = () => {
    const { i18n, t } = useTranslation();

    const handleClick = () => window.location.reload();

    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => i18n.changeLanguage(e.target.value)

    return (
        <div className="flex flex-row text-title justify-between mt-10 mb-14">
            <h1 className="text-1xl font-bold cursor-pointer" onClick={ handleClick }>{t('hello')}</h1>
            {/* <ul className="flex flex-row text-title [&>*]:pl-4">
                <li>Writing</li>
                <li>Contact</li>
            </ul> */}
            <select defaultValue={ i18n.language } onChange={ handleLangChange }>
                {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    )
}
  
export default Navbar