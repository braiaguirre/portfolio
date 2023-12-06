
import Repo from './Repo'

const Repos = () => {

    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">For fun</h3>
            <Repo 
                title="Exercism / Javascript" 
                desc="Exercism's Javascript puzzles. 41% completed" 
                url="https://github.com/braiaguirre/exercism-javascript"
                stack={['JAVASCRIPT']}
            />
            <Repo 
                title="Exercism / Typescript" 
                desc="Exercism's Typescript puzzles. 11% completed" 
                url="https://github.com/braiaguirre/exercism-typescript"
                stack={['TYPESCRIPT']}
            />
            <Repo 
                title="Exercism / C#" 
                desc="Exercism's C# puzzles. 1% completed" 
                url="https://github.com/braiaguirre/exercism-csharp"
                stack={['CSHARP']}
            />
            <Repo 
                title="Exercism / Python" 
                desc="Exercism's Python puzzles. 1% completed" 
                url="https://github.com/braiaguirre/exercism-python"
                stack={['PYTHON']}
            />
            <Repo 
                title="Processing" 
                desc="Some Processing creations." 
                url="https://github.com/braiaguirre/processing"
                stack={['PROCESSING']}
            />
        </div>
    )
}
  
export default Repos