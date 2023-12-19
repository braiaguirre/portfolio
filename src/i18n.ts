import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
        translation: {
            hello: 'Hello.',
            bioTitle: 'I\'m Brian,',
            bioSubtitle: 'a full stack developer based in Bariloche, Argentina.',
            bioDesc: 'Full stack developer with a knack for creating innovative applications. I thrive in fast-paced environments and enjoy collaborating to bring ideas to life. When not coding, I may be found trekking around Patagonia.',
            projects: 'Projects',
            repoDescDeliveryHero: 'Catalog update through API connection. Working on this right now.',
            repoDescPortfolio: 'This simple looking portfolio in front of you.',
            repoDescCreva: 'Back-end work for Creva\'s personalized app. Integrations: Firebase, Nodemailer, Stripe, Mercado Pago.',
            repoDescPokemon: 'Interactive app connected to a Pokémon\'s API for Henry\'s final project. Includes full login system.',
            repoDescRickAndMorty: 'Interactive app connected to a Rick and Morty\'s API for Henry\'s integrative project.',
            kiweeDesc: 'Personalized apps and websites according to the client\'s specifications.',
            others: 'Others',
            linkDescJavascript: 'Exercism\'s Javascript puzzles. 41% completed.',
            linkDescTypescript: 'Exercism\'s Typescript puzzles. 11% completed.',
            linkDescCSharp: 'Exercism\'s C# puzzles. 1% completed.',
            linkDescPython: 'Exercism\'s Python puzzles. 1% completed.',
            linkDescProcessing: 'Some Processing creations.',
            contact: 'Di hola',
        }
    },
    es: {
        translation: {
            hello: 'Hola.',
            bioTitle: 'Soy Brian,',
            bioSubtitle: 'desarrollador full stack viviendo en Bariloche, Argentina.',
            bioDesc: 'Desarrollador con entusiasmo por crear aplicaciones innovadoras. Me gusta trabajar en ambientes ágiles y colaborar con otras personas para darle vida a ideas que aporten valor a nuestro mundo. Cuando no estoy codeando me pueden encontrar haciendo trekking en la Patagonia.',
            projects: 'Proyectos',
            repoDescDeliveryHero: 'Integración a través de API para actualizar catálogos en las aplicaciones de Delivery Hero (Pedidos Ya en LATAM). Trabajando en esto...',
            repoDescPortfolio: 'Este simple portfolio en frente tuyo.',
            repoDescCreva: 'Trabajo de beck-end para la aplicación personalizada de Creva. Integraciones con Firebase, Nodemailer, Stripe, Mercado Pago.',
            repoDescPokemon: 'Aplicación interactiva conectada a una API de Pokémon con sistema de login y registro completo. Desarrollada para el proyecto final de Henry.',
            repoDescRickAndMorty: 'Aplicación interactiva conectada a una API de Rick and Morty. Desarrollada para el proyecto integrador de Henry.',
            kiweeDesc: 'Aplicaciones y sitios web personalizados de acuerdo a las especificaciones del cliente.',
            others: 'Otros',
            linkDescJavascript: 'Ejercicios de Exercism en Javascript. 41% completado.',
            linkDescTypescript: 'Ejercicios de Exercism en Typescript. 11% completado.',
            linkDescCSharp: 'Ejercicios de Exercism en C#. 1% completado.',
            linkDescPython: 'Ejercicios de Exercism en Python. 1% completado.',
            linkDescProcessing: 'Algunas creaciones en Processing.',
            contact: 'Di hola',
        }
    }
  },
});

export default i18n;
