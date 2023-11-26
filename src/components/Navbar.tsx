const Navbar = () => {
    
    const handleClick = () => window.location.reload();

    return (
        <div className="flex flex-row text-title justify-between mt-10 mb-14">
            <h1 className="text-1xl font-bold cursor-pointer" onClick={ handleClick }>Brian Aguirre</h1>
            {/* <ul className="flex flex-row text-title [&>*]:pl-4">
                <li>Writing</li>
                <li>Contact</li>
            </ul> */}
        </div>
    )
}
  
export default Navbar