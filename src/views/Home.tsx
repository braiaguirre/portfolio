import Navbar from '../components/Navbar';
import Bio from '../components/Bio';
import Projects from '../components/Projects';

const Home = () => {
    return (
      <div className="flex flex-col text-white w-[550px]">
          <Navbar />
          <Bio />
          <Projects />
      </div>
    )
}
  
export default Home