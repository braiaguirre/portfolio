import Navbar from '../components/Navbar';
import Bio from '../components/Bio';

const Home = () => {
    return (
      <div className="flex flex-col text-white w-[600px]">
          <Navbar />
          <Bio />
      </div>
    )
}
  
export default Home