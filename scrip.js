let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

const translations = {
  es: {
    inicio: "INICIO",
    sobremi: "SOBRE MI",
    skills: "HABILIDADES",
    portafolio: "PORTAFOLIO",
    contacto: "CONTACTO",
    name: "JORGE LUIS RODRIGUEZ ROMO",
    profession: "Front-End Developer",
    Tskills: "Habilidades",
    aboutMeTitle: "Sobre Mi",
    aboutMeText:
      "¡Hola! Soy un Desarrollador web especializado en Front-End con conocimientos en Back-end.",
    curriculum: "Curriculum",
    workExperience: "Experiencia de trabajo",
    portfolio: "Portafolio",
    contact: "Contacto",
    workDetails: {
      item1: "Desarrollé aplicaciones web con Vue.js y Node.js.",
      item2: "Creé interfaces dinámicas y responsivas usando Vuetify.",
      item3: "Integré bases de datos SQL Server para una gestión eficiente.",
      item4:
        "Colaboré con equipos multidisciplinarios en soluciones tecnológicas.",
      item5:
        "Participé en todas las fases del ciclo de desarrollo de software.",
    },
    fieldTechDetails: {
      item1: "Instalé y mantuve cableado de red en empresas.",
      item2: "Experiencia en instalación de cables de fibra óptica.",
      item3: "Instalación de cámaras de seguridad.",
      item4: "Configuración de racks de servidores.",
      item5: "Conocimiento en cableado estructurado.",
    },
  },
  en: {
    inicio: "HOME",
    sobremi: "ABOUT ME",
    skills: "SKILLS",
    portafolio: "PORTFOLIO",
    contacto: "CONTACT",
    welcomeTitle: "JORGE LUIS RODRIGUEZ ROMO",
    profession: "Front-End Developer",
    Tskills: "Skills",
    aboutMeTitle: "About Me",
    aboutMeText:
      "Hello! I'm a web developer specialized in Front-End with knowledge in Back-End.",
    curriculum: "Curriculum",
    workExperience: "Work Experience",
    portfolio: "Portfolio",
    contact: "Contact",
    workDetails: {
      item1: "Developed web applications with Vue.js and Node.js.",
      item2: "Created dynamic and responsive interfaces using Vuetify.",
      item3: "Integrated SQL Server databases for efficient management.",
      item4:
        "Collaborated with multidisciplinary teams on technological solutions.",
      item5:
        "Participated in all phases of the software development lifecycle.",
    },
    fieldTechDetails: {
      item1: "Installed and maintained network cabling in companies.",
      item2: "Experience in installing fiber optic cables.",
      item3: "Installation of security cameras.",
      item4: "Configuration of server racks.",
      item5: "Knowledge in structured cabling.",
    },
  },
};

// Función para cambiar el idioma
// Función para cambiar el idioma
function changeLanguage(language) {
  // Cambiar el texto de todos los elementos con el atributo 'data-translate'
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const keys = key.split("."); // Dividir la clave en partes para acceder a las traducciones anidadas

    let translation = translations[language]; // Inicializar la traducción
    keys.forEach((k) => {
      if (translation) {
        translation = translation[k]; // Navegar por las claves anidadas
      }
    });

    if (translation !== undefined) {
      element.textContent = translation;
    }
  });
}

window.addEventListener("load", function () {
  document.body.classList.add("fade-in");
});

// Escuchar el cambio en el selector de idioma
document
  .getElementById("language-select")
  .addEventListener("change", function (e) {
    const language = e.target.value;
    changeLanguage(language);
  });

// Establecer el idioma inicial (español por defecto)
changeLanguage("es");
