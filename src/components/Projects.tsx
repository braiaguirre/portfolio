
import Project from './Project'

const Projects = () => {

    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">Projects</h3>
            <Project 
                title="Portfolio" 
                desc="Click to open." 
                url="https://github.com/braiaguirre/"
            />
            <Project 
                title="Creva" 
                desc="Private repository." 
                url="https://github.com/braiaguirre/" 
            />
            <Project 
                title="Pokéapi" 
                desc="Click to open." 
                url="https://github.com/braiaguirre/pi-pokemon" 
            />
            <Project 
                title="Rick and Morty" 
                desc="Click to open." 
                url="https://github.com/braiaguirre/rick-and-morty" 
            />
        </div>
    )
}
  
export default Projects