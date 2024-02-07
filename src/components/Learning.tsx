import { useTranslation } from "react-i18next"

const Learning = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">Currently learning</h3>
            <p className='text-lightgray'>- Solidity</p>
        </div>
    )
}
  
export default Learning