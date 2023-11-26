import Navbar from '../components/Navbar';

const Home = () => {
    return (
      <div className="flex flex-col text-white w-[600px]">
          <Navbar />
          <h1 className="text-3xl font-bold">Hi, I'm Brian.</h1>
          <h2 className="text-3xl font-bold text-gray mb-4">A full stack developer from Buenos Aires based in Bariloche.</h2>
          <p className='text-gray leading-3'>I’m Alex, a product engineer and designer based in Milan, Italy. I work with leading-edge companies to create exceptional products. I’m currently working with MoonPay to help make web3 accessible. Before that, I built personal and business banking products for millions of customers at Monzo.</p>
      </div>
    )
  }
  
  export default Home