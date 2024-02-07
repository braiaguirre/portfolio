import { useTranslation } from "react-i18next"
import Navbar from '../components/Navbar'
import Bio from '../components/Bio'
import Links from '../components/Links'
import Contact from '../components/Contact'
import db from '../utils/db.json'
import Learning from "../components/Learning"

const Home = () => {
    const { t } = useTranslation();
    
    return (
      <div className="flex flex-col w-[400px] md:w-[550px] lg:w-[650px]">
          <Navbar />
          <Bio />
          <Learning />
          <Links title={t('projects')} links={ db.projects } />
          <Links title="Kiwee Studio" links={ db.kiwee } />
          <Links title={t('others')} links={ db.others } />
          <Contact />
      </div>
    )
}
  
export default Home