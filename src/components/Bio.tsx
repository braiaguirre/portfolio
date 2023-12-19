import { useTranslation } from "react-i18next"

const Bio = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col mb-24">
            <h1 className="text-3xl font-bold mb-2 text-title">{t('bioTitle')}</h1>
            <h2 className="text-3xl font-bold text-gray mb-4">{t('bioSubtitle')}</h2>
            <p className='text-lightgray'>{t('bioDesc')}</p>
        </div>
    )
}
  
export default Bio