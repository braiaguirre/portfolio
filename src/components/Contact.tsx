const Contact = () => {
    return (
        <div className="flex flex-col mb-10">
            <h3 className="text-1xl font-bold mb-2">Say hello</h3>

            <div className="flex flex-row mb-10 space-x-24">
                <div className="flex flex-col space-y-1">
                    <p className="text-gray">Email</p>
                    <p className="text-gray">GitHub</p>
                    <p className="text-gray">Linkedin</p>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="text-gray">aguirre.brianalexis94@gmail.com</p>
                    <p className="text-gray">/braiaguirre</p>
                    <p className="text-gray">/brian-aguirre-1947a3281</p>
                </div>
            </div>
        </div>
    )
}
  
export default Contact