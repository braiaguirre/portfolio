import Navbar from '../components/Navbar';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
      <div className="flex flex-col text-white w-[550px]">
          <Navbar />
          <Bio />
          <Projects />
          <Contact />
      </div>
    )
}
  
export default Home