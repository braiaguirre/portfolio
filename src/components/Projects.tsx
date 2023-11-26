import Project from './Project'

const Projects = () => {
    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2">Projects</h3>
            <Project title="Creva" desc="Pokémon project using PokeApiusing PokeApi." />
            <Project title="Poké Henry" desc="Pokémon project using PokeApi." />
            <Project title="Rick and Morty" desc="Pokémon project using PokeApi." />
        </div>
    )
}
  
export default Projects