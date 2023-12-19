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
            bioDesc: 'Developer with a knack for creating innovative applications. I thrive in fast-paced environments and enjoy collaborating to bring ideas to life. When not coding, I may be found trekking around Patagonia.',
            projects: 'Projects',
            others: 'Others',
            contact: 'Di hola',
        }
    },
    es: {
        translation: {
            hello: 'Hola.',
            bioTitle: 'Soy Brian,',
            bioSubtitle: 'desarrollador full stack viviendo en Bariloche, Argentina.',
            bioDesc: 'Desarrollador con ganas de crear aplicaciones innovadoras. Me siento cómodo trabajando en ambientes ágiles y colaborar con otras personas para darle vida a ideas que aporten valor a nuestro mundo. Cuando no estoy codeando me pueden encontrar haciendo trekking en la Patagonia.',
            projects: 'Proyectos',
            others: 'Otros',
            contact: 'Di hola',
        }
    }
  },
});

export default i18n;
