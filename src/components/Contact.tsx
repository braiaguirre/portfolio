const Contact = () => {
    
    const handleEmail = () => window.open('emailto:aguirre.brianalexis94@gmail.com', '_blank')
    const handleGithub = () => window.open('github.com/braiaguirre', '_blank')
    const handleLinkedin = () => window.open('linkedin.com/in/brian-aguirre-1947a3281/', '_blank')
    
    return (
        <div className="flex flex-col mb-10">
            <h3 className="text-1xl font-bold mb-2 text-title">Say hello</h3>

            <div className="flex flex-row mb-10 space-x-24">
                <div className="flex flex-col space-y-1 text-gray">
                    <p>Email</p>
                    <p>Linkedin</p>
                    <p>GitHub</p>
                </div>
                <div className="flex flex-col space-y-1 text-gray [&>*]:cursor-pointer">
                    <p onClick={ handleEmail }>aguirre.brianalexis94@gmail.com</p>
                    <p onClick={ handleLinkedin }>/brian-aguirre-1947a3281</p>
                    <p onClick={ handleGithub }>/braiaguirre</p>
                </div>
            </div>
        </div>
    )
}
  
export default Contact