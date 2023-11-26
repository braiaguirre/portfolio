import icon from '../assets/duo-icon.webp'

type ProjectType = {
    title: string
    desc: string
    url: string
}

const Project = ({ title, desc, url }:ProjectType) => {

    const handleClick = () => window.open(url, '_blank')

    return (
        <div className="flex flex-row w-100 bg-project p-5 mt-2 mb-2 rounded-lg cursor-pointer duration-150 hover:bg-projectHover" onClick={ handleClick }>
            <div className="mr-4">
                <img className="rounded-lg" src={ icon } />
            </div>
            <div className="flex flex-col w-100">
                <h3 className="text-1xl font-bold text-subtitle">{ title }</h3>
                <p className="text-gray">{ desc }</p>
            </div>
        </div>
    )
}
  
export default Project