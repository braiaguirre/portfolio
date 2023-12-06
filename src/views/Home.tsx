import Navbar from '../components/Navbar';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Repos from '../components/Repos';

const Home = () => {
    return (
      <div className="flex flex-col w-[400px] md:w-[550px]">
          <Navbar />
          <Bio />
          <Projects />
          <Repos />
          <Contact />
      </div>
    )
}
  
export default Home