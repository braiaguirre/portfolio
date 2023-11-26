import icon from '../assets/duo-icon.webp'

const Project = () => {
    return (
        <div className="flex flex-row w-100 bg-project p-5 mt-2 mb-2 rounded-lg cursor-pointer duration-150 hover:bg-projectHover">
            <div className="mr-4">
                <img className="rounded-lg" src={ icon } />
            </div>
            <div className="flex flex-col w-100">
                <h3 className="text-1xl font-bold">Title</h3>
                <p className="text-gray">Description</p>
            </div>
        </div>
    )
}
  
export default Project