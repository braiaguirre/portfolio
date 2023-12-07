import iconSelector from '../utils/iconSelector'

type ProjectType = {
    title: string
    desc: string
    url: string
    stack: string[]
}

const Link = ({ title, desc, url, stack }:ProjectType) => {

    const handleClick = () => window.open(url, '_blank')

    return (
        <div className="flex flex-row w-100 items-center justify-between bg-project p-5 mt-2 mb-2 rounded-lg cursor-pointer duration-200 hover:bg-projectHover" onClick={ handleClick }>
            <div className="flex mr-4 space-x-3 items-center">
                {/* <span className="material-symbols-outlined text-title text-3xl font-bold">arrow_forward</span> */}
                <div>
                    <h3 className="text-1xl font-bold text-subtitle">{ title }</h3>
                    <p className="text-lightgray sm:w-[200px] md:w-[350px]">{ desc }</p>
                </div>
            </div>
            <div className="flex flex-row justify-end flex-wrap items-center sm:w-[80px] md:w-[150px] lg:w-[200px] [&>img]:h-4 [&>img]:mt-2 space-x-2">
                { stack.map((tech, i) => <img key={ i } src={ iconSelector(tech) } />) }
            </div>
        </div>
    )
}
  
export default Link