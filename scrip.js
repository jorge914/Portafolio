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
    education: "Educacion",
    ITTechnician: "Tecnico en informatica",
    Engineering: "Ingenieria en Sistemas Computacionales",
    portfolio: "Portafolio",
    contact: "Contacto",
    NetworkTechnician: "Técnico de Instalación y Mantenimiento de Redes",
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
    placeholderName: "Tú Nombre",
    placeholderPhone: "Número telefónico",
    placeholderEmail: "Dirección de correo",
    placeholderSubject: "Tema",
    placeholderMessage: "Mensaje",
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
    education: "Education",
    ITTechnician: "IT Technician",
    Engineering: "Computer Systems Engineering",
    portfolio: "Portfolio",
    contact: "Contact",
    NetworkTechnician: "Network Installation and Maintenance Technician",
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
    placeholderName: "Your Name",
    placeholderPhone: "Phone Number",
    placeholderEmail: "Email Address",
    placeholderSubject: "Subject",
    placeholderMessage: "Message",
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

  const placeholders = document.querySelectorAll(
    "input[placeholder], textarea[placeholder]"
  );
  placeholders.forEach((input) => {
    const placeholderKey = `placeholder${
      input.name.charAt(0).toUpperCase() + input.name.slice(1)
    }`;
    input.placeholder =
      translations[language][placeholderKey] || input.placeholder;
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

(function () {
  emailjs.init("yva9JteIlPSkvRqUk"); // Asegúrate de que el ID del servicio es correcto
})();

document
  .querySelector("#contacto button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de manera tradicional

    // Crear el objeto con los datos del formulario
    var formData = {
      name: document.querySelector("[name='Name']").value,
      phone: document.querySelector("[name='Phone']").value,
      email: document.querySelector("[name='Email']").value,
      subject: document.querySelector("[name='Subject']").value,
      message: document.querySelector("[name='Message']").value,
    };

    // Validación simple (asegurarse de que no haya campos vacíos)
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Enviar el formulario usando EmailJS
    emailjs.send("service_jztzgmn", "template_lbeoekp", formData).then(
      function (response) {
        console.log("Correo enviado con éxito", response);
        alert("¡Mensaje enviado con éxito!");
        // Limpiar los campos del formulario después de un envío exitoso
        document.querySelector("#contacto").reset();
      },
      function (error) {
        console.log("Error al enviar el correo", error);
        alert(
          "Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo."
        );
      }
    );
  });
