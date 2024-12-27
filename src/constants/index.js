import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Características",
    url: "#features",
  },
  {
    id: "1",
    title: "Precios",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Como usar",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Nueva cuenta",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Iniciar sesión",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Generacion de fotos",
  "Mejora de fotos",
  "Integracion perfecta",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Reconocimiento de voz",
    text: "Habilite el chatbot para comprender y responder a comandos de voz, lo que facilita a los usuarios interactuar con la aplicación con manos libres.",
    date: "Mayo 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamificación",
    text: "Agregue elementos similares a juegos, como insignias o tablas de clasificación, para incentivar a los usuarios a interactuar con el chatbot con más frecuencia.",
    date: "Mayo 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Customizacion de Chatbot",
    text: "Permita a los usuarios personalizar la apariencia y el comportamiento del chatbot, haciéndo más atractivo y divertido interactuar con el.",
    date: "Mayo 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Intregracion con APIs",
    text: "Permita que el chatbot acceda a fuentes de datos externas, como API meteorológicas o API de noticias, para proporcionar recomendaciones más relevantes.",
    date: "Mayo 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Con automatización inteligente y seguridad de primer nivel, es la solución perfecta para equipos que buscan trabajar de manera más inteligente..";

export const collabContent = [
  {
    id: "0",
    title: "Integracion perfecta",
    text: collabText,
  },
  {
    id: "1",
    title: "Automatizacion inteligente",
  },
  {
    id: "2",
    title: "Seguridad de primer nivel",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basico",
    description: "Recomendaciones personalizadas de Brainwave",
    price: "0",
    features: [
      "Un chatbot con IA que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias.",
      "Posibilidad de explorar la aplicación y sus funciones sin ningún costo.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Chatbot de IA avanzado, soporte prioritario, panel de análisis",
    price: "9.99",
    features: [
      "Un chatbot de IA avanzado que puede comprender consultas complejas",
      "Un panel de análisis para realizar un seguimiento de sus conversaciones",
      "Soporte prioritario para resolver problemas rápidamente",
    ],
  },
  {
    id: "2",
    title: "De empresa",
    description: "Chatbot de IA personalizado, análisis avanzado, cuenta dedicada",
    price: null,
    features: [
      "Un chatbot con IA que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias.",
      "Posibilidad de explorar la aplicación y sus funciones sin ningún costo.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pregunta cualquier cosa",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mejorar cada día",
    text: "La aplicación utiliza procesamiento de lenguaje natural para comprender las consultas de los usuarios y brindar respuestas precisas y relevantes.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Conéctate en todas partes",
    text: "Conéctese con el chatbot de IA desde cualquier lugar y en cualquier dispositivo, haciéndolo más accesible y conveniente.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Respuesta rápida",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Pregunta cualquier cosa",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Mejorar cada día",
    text: "La aplicación utiliza procesamiento de lenguaje natural para comprender las consultas de los usuarios y brindar respuestas precisas y relevantes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
