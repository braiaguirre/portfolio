import iconSelector from '../utils/iconSelector'

type RepoType = {
    title: string
    desc: string
    url: string
    stack: string[]
}

const Repo = ({ title, desc, url, stack }:RepoType) => {

    const handleClick = () => window.open(url, '_blank')

    return (
        <div className="flex flex-row w-100 items-center justify-between bg-project p-5 mt-2 mb-2 rounded-lg cursor-pointer duration-200 hover:bg-projectHover" onClick={ handleClick }>
            <div className="flex mr-4 space-x-3 items-center">
                {/* <span className="material-symbols-outlined text-title text-3xl font-bold">arrow_forward</span> */}
                <div>
                    <h3 className="text-1xl font-bold text-subtitle">{ title }</h3>
                    <p className="text-lightgray">{ desc }</p>
                </div>
            </div>
            <div className="flex flex-row items-center [&>img]:h-4 space-x-2">
                { stack.map((tech, i) => <img key={ i } src={ iconSelector(tech) } />) }
            </div>
        </div>
    )
}
  
export default Repo