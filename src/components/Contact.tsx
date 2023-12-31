import { useTranslation } from "react-i18next"

const Contact = () => {
    
    const { t } = useTranslation();
    const handleEmail = () => window.open('emailto:aguirre.brianalexis94@gmail.com', '_blank')
    const handleGithub = () => window.open('github.com/braiaguirre', '_blank')
    const handleLinkedin = () => window.open('linkedin.com/in/brian-aguirre-1947a3281/', '_blank')
    
    return (
        <div className="flex flex-col">
            <h3 className="text-1xl font-bold mb-2 text-title">{t('contact')}</h3>

            <div className="flex flex-row mb-10 space-x-24">
                <div className="flex flex-col space-y-1 text-gray">
                    <p>Email</p>
                    <p>Linkedin</p>
                    <p>GitHub</p>
                </div>
                <div className="flex flex-col space-y-1 text-gray [&>*]:cursor-pointer">
                    <p className="hover:text-white duration-200" onClick={ handleEmail }>aguirre.brianalexis94@gmail.com</p>
                    <p className="hover:text-white duration-200" onClick={ handleLinkedin }>/brian-aguirre-1947a3281</p>
                    <p className="hover:text-white duration-200" onClick={ handleGithub }>/braiaguirre</p>
                </div>
            </div>
        </div>
    )
}
  
export default Contact