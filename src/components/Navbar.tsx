const Navbar = () => {
    return (
      <div className="flex flex-row text-white justify-between mt-10 mb-14">
          <h1 className="text-1xl font-bold">Brian Aguirre</h1>
          <ul className="flex flex-row text-white [&>*]:pl-4">
            <li>Writing</li>
            <li>Contact</li>
          </ul>
      </div>
    )
  }
  
  export default Navbar