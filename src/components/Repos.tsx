
import Repo from './Repo'

const Repos = () => {

    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">Other</h3>
            <Repo 
                title="Exercism / Javascript" 
                desc="Click to open repo." 
                url="https://github.com/braiaguirre/exercism-javascript"
            />
            <Repo 
                title="Exercism / Typescript" 
                desc="Click to open repo." 
                url="https://github.com/braiaguirre/exercism-typescript"
            />
            <Repo 
                title="Exercism / C#" 
                desc="Click to open repo." 
                url="https://github.com/braiaguirre/exercism-csharp"
            />
            <Repo 
                title="Exercism / Python" 
                desc="Click to open repo." 
                url="https://github.com/braiaguirre/exercism-python"
            />
            <Repo 
                title="Processing" 
                desc="Click to open repo." 
                url="https://github.com/braiaguirre/processing"
            />
        </div>
    )
}
  
export default Repos