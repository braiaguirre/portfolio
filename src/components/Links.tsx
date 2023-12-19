
import Link from './Link'

type Links = {
    title: string
    links: {
        title: string
        desc: {
            en: string
            es: string
        }
        url: string
        stack: string[]
    } []
}

const Links = ({ title, links }: Links ) => {

    return (
        <div className="flex flex-col mb-24">
            <h3 className="text-1xl font-bold mb-2 text-title">{ title }</h3>
            { links.map((link, i) => 
                <Link 
                    key={ i } 
                    title={ link.title }
                    desc={ link.desc }
                    url={ link.url }
                    stack={ link.stack }
                />) 
            }
        </div>
    )
}
  
export default Links