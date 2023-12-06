
import Project from './Project'

const Projects = () => {

    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">Projects</h3>
            <Project 
                title="Delivery Hero API" 
                desc="Catalog update through API. Working on this." 
                url="https://github.com/braiaguirre/"
            />
            <Project 
                title="Portfolio" 
                desc="This simple portfolio you are looking at." 
                url="https://github.com/braiaguirre/"
            />
            <Project 
                title="Creva" 
                desc="Back-end work for Creva's personalized app." 
                url="https://creva.vercel.app/" 
            />
            <Project 
                title="Pokéapi" 
                desc="Full stack development of Henry's final project." 
                url="https://github.com/braiaguirre/pi-pokemon" 
            />
            <Project 
                title="Rick and Morty" 
                desc="Full stack development of Henry's integrative project." 
                url="https://github.com/braiaguirre/rick-and-morty" 
            />
        </div>
    )
}
  
export default Projects