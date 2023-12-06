
import Project from './Project'

const Projects = () => {

    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">Projects</h3>
            <Project 
                title="Delivery Hero Integration" 
                desc="Catalog update through API. Working on this." 
                url="https://github.com/braiaguirre/"
                stack={['JAVASCRIPT', 'REACT', 'TAILWIND', 'NODE']}
            />
            <Project 
                title="Portfolio" 
                desc="This simple portfolio you are looking at." 
                url="https://github.com/braiaguirre/"
                stack={['TYPESCRIPT', 'REACT', 'TAILWIND']}
            />
            <Project 
                title="Creva" 
                desc="Back-end work for Creva's personalized app." 
                url="https://creva.vercel.app/" 
                stack={['JAVASCRIPT', 'NODE', 'FIREBASE', 'POSTGRESQL']}
            />
            <Project 
                title="Henry final project" 
                desc="Interactive app connected to a Pokémon's API." 
                url="https://github.com/braiaguirre/pi-pokemon" 
                stack={['JAVASCRIPT', 'REACT', 'NODE', 'POSTGRESQL']}
            />
            <Project 
                title="Henry integrative project " 
                desc="Interactive app connected to a Rick and Morty's API." 
                url="https://github.com/braiaguirre/rick-and-morty" 
                stack={['JAVASCRIPT', 'REACT', 'NODE', 'POSTGRESQL']}
            />
        </div>
    )
}
  
export default Projects