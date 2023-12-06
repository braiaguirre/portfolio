import javascript from '../assets/javascript-icon.png'
import typescript from '../assets/typescript-icon.png'
import csharp from '../assets/csharp-icon.png'
import python from '../assets/python-icon.png'
import processing from '../assets/processing-icon.png'
import react from '../assets/react-icon.png'
import tailwind from '../assets/tailwind-icon.png'
import node from '../assets/node-icon.png'
import firebase from '../assets/firebase-icon.png'
import postgresql from '../assets/postgresql-icon.png'

const STACK_MAP = {
    'JAVASCRIPT': javascript,
    'TYPESCRIPT': typescript,
    'CSHARP': csharp,
    'PYTHON': python,
    'PROCESSING': processing,
    'REACT': react,
    'TAILWIND': tailwind,
    'NODE': node,
    'FIREBASE': firebase,
    'POSTGRESQL': postgresql,
}

export default (tech :string) => STACK_MAP[tech]