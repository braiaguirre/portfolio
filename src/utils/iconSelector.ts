import javascript from '../assets/javascript-icon.png'
import typescript from '../assets/typescript-icon.png'
import csharp from '../assets/csharp-icon.png'
import python from '../assets/python-icon.png'
import processing from '../assets/processing-icon.png'
import react from '../assets/react-icon.png'
import tailwind from '../assets/tailwind-icon.png'
import node from '../assets/node-icon.png'
import express from '../assets/express-icon.png'
import firebase from '../assets/firebase-icon.png'
import postgresql from '../assets/postgresql-icon.png'
import mysql from '../assets/mysql-icon.png'
import elementor from '../assets/elementor-icon.png'
import wordpress from '../assets/wordpress-icon.png'

type StackMap = {
    [key: string]: string
}

const STACK_MAP: StackMap = {
    'JAVASCRIPT': javascript,
    'TYPESCRIPT': typescript,
    'CSHARP': csharp,
    'PYTHON': python,
    'PROCESSING': processing,
    'REACT': react,
    'TAILWIND': tailwind,
    'NODE': node,
    'EXPRESS': express,
    'FIREBASE': firebase,
    'POSTGRESQL': postgresql,
    'WORDPRESS': wordpress,
    'MYSQL': mysql,
    'ELEMENTOR': elementor
}

export default (tech :string): string => STACK_MAP[tech]