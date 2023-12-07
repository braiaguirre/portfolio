import Navbar from '../components/Navbar'
import Bio from '../components/Bio'
import Links from '../components/Links'
import Contact from '../components/Contact'
import db from '../utils/db.json'

const Home = () => {
    return (
      <div className="flex flex-col w-[400px] md:w-[550px] lg:w-[650px]">
          <Navbar />
          <Bio />
          <Links title="Projects" links={ db.projects } />
          <Links title="Kiwee Studio" links={ db.kiwee } />
          <Links title="Others" links={ db.others } />
          <Contact />
      </div>
    )
}
  
export default Home