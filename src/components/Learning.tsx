import iconSelector from '../utils/iconSelector'
import { useTranslation } from "react-i18next"

const Learning = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">{t('learning')}</h3>
            <div className="flex flex-row justify-end flex-wrap items-center sm:w-[80px] md:w-[150px] lg:w-[200px] [&>img]:h-4 [&>img]:mt-2 space-x-2">
                <img key={ 1 } src={ iconSelector('SOLIDITY') } />
                <p className='text-lightgray'>Solidity</p>
            </div>
            {/* <img key='1' src={ iconSelector('SOLIDITY') } /> */}
            <p className='text-lightgray'>- Testing</p>
        </div>
    )
}
  
export default Learning