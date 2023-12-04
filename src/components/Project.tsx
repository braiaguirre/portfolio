import react from '../assets/react-icon.png'
import tailwind from '../assets/tailwind.png'


type ProjectType = {
    title: string
    desc: string
    url: string
}

const Project = ({ title, desc, url }:ProjectType) => {

    const handleClick = () => window.open(url, '_blank')

    return (
        <div className="flex flex-row w-100 items-center justify-between bg-project p-5 mt-2 mb-2 rounded-lg cursor-pointer duration-200 hover:bg-projectHover" onClick={ handleClick }>
            <div className="flex mr-4 space-x-3 items-center">
                <span className="material-symbols-outlined text-title text-3xl font-bold">arrow_forward</span>
                <div>
                    <h3 className="text-1xl font-bold text-subtitle">{ title }</h3>
                    <p className="text-lightgray">{ desc }</p>
                </div>
            </div>
            <div className="flex flex-row items-center [&>img]:h-4 space-x-2">
                <img src={ react } />
                <img src={ tailwind } />
            </div>
        </div>
    )
}
  
export default Project