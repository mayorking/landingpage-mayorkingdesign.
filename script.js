function switchLanguage(lang) {
    const texts = {
        es: {
            title: "Impulsa tu Negocio con un Diseño de Calidad",
            description: "Ofrecemos servicios de Diseño Gráfico, Páginas WEB, Redes Sociales, Fotografía y Más.",
            whatsapp: "¡Escríbenos por WhatsApp!",
            subtitle: "Tu Solución Profesional en Diseño y Publicidad", // Español
            service1Title: "Diseño de Tarjetas",
            service1Desc: "Tarjetas de Presentación únicas y Profesionales.",
            service2Title: "Páginas WEB",
            service2Desc: "Desarrollo WEB moderno y optimizado para tu Negocio.",
            service3Title: "Gestión de Redes Sociales",
            service3Desc: "Impulsa tu Presencia Online con Estrategias Efectivas.",
            details1Title: "Detalles del Diseño de Tarjetas",
            details1Desc: "Ofrecemos diseños personalizados con acabados profesionales...",
            finishTypesTitle: "Tipos de Acabado:",
            glossy: "Brillante",
            matte: "Mate",
            details2Title: "Detalles de Páginas Web",
            details2Desc: "Desarrollamos sitios WEB Responsivos...",
            details3Title: "Detalles de Gestión de Redes Sociales",
            details3Desc: "Diseñamos Estrategias de Contenido...",
            footerRights: "© 2025 Mayorking Design | Todos los derechos reservados",
            footerContact: "Email: mayorkingdesign@gmail.com | Tel: +1 718 678 7899",
            emailPlaceholder: "Tu Email",
            messagePlaceholder: "Dime tu Mensaje",
            submitButton: "Enviar"
        },
        en: {
            title: "Boost Your Business with Quality Design",
            description: "We offer Graphic Design, Websites, Social Media Management, Photography and more.",
            whatsapp: "Write to Us on WhatsApp!",
            subtitle: "Your Professional Solution in Design and Advertising", // Inglés
            service1Title: "Business Card Design",
            service1Desc: "Unique and Professional Business Cards.",
            service2Title: "Web Pages",
            service2Desc: "Modern and optimized Web Development for your Business.",
            service3Title: "Social Media Management",
            service3Desc: "Boost your Online Presence with Effective Strategies.",
            details1Title: "Details of Business Card Design",
            details1Desc: "We offer personalized designs with professional finishes...",
            finishTypesTitle: "Types of Finish:",
            glossy: "Glossy",
            matte: "Matte",
            details2Title: "Details of Web Pages",
            details2Desc: "We develop responsive websites...",
            details3Title: "Details of Social Media Management",
            details3Desc: "We design Content Strategies...",
            footerRights: "© 2025 Mayorking Design | All rights reserved",
            footerContact: "Email: mayorkingdesign@gmail.com | Phone: +1 718 678 7899",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Write Your Message",
            submitButton: "Send"
        }
    };

    // Cambiar título, descripción, whatsapp, y la frase debajo de Mayorking Design
    document.getElementById("cta-title").textContent = texts[lang].title;
    document.getElementById("cta-description").textContent = texts[lang].description;
    document.getElementById("whatsapp-button").innerHTML = `<img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='WhatsApp Icon'> ${texts[lang].whatsapp}`;
    document.getElementById("subtitle").textContent = texts[lang].subtitle;

    // Cambiar los textos de los servicios
    document.getElementById("service1-title").textContent = texts[lang].service1Title;
    document.getElementById("service1-desc").textContent = texts[lang].service1Desc;
    document.getElementById("service2-title").textContent = texts[lang].service2Title;
    document.getElementById("service2-desc").textContent = texts[lang].service2Desc;
    document.getElementById("service3-title").textContent = texts[lang].service3Title;
    document.getElementById("service3-desc").textContent = texts[lang].service3Desc;

    // Cambiar los detalles de los servicios
    document.getElementById("details1-title").textContent = texts[lang].details1Title;
    document.getElementById("details1-desc").textContent = texts[lang].details1Desc;
    document.getElementById("finish-types-title").textContent = texts[lang].finishTypesTitle;
    document.getElementById("glossy").textContent = texts[lang].glossy;
    document.getElementById("matte").textContent = texts[lang].matte;
    document.getElementById("details2-title").textContent = texts[lang].details2Title;
    document.getElementById("details2-desc").textContent = texts[lang].details2Desc;
    document.getElementById("details3-title").textContent = texts[lang].details3Title;
    document.getElementById("details3-desc").textContent = texts[lang].details3Desc;

    // Cambiar el footer
    document.getElementById("footer-rights").textContent = texts[lang].footerRights;
    document.getElementById("footer-contact").textContent = texts[lang].footerContact;

    // Cambiar placeholders y el botón
    document.getElementById('email-placeholder').setAttribute('placeholder', texts[lang].emailPlaceholder);
    document.getElementById('message-placeholder').setAttribute('placeholder', texts[lang].messagePlaceholder);
    document.getElementById('submit-button').innerText = texts[lang].submitButton;
}

document.getElementById('language-toggle').addEventListener('click', function () {
    let currentLanguage = this.innerText;

    if (currentLanguage === 'English') {
        this.innerText = 'Español';
        switchLanguage('en');  // Llamar a la función con el valor 'en'
    } else {
        this.innerText = 'English';
        switchLanguage('es');  // Llamar a la función con el valor 'es'
    }
});
