// Espera a que todo el documento HTML cargue
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    //  Script del Menú Hamburguesa
    // ==============================
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu a");

    if (navbar && menu) {
        const toggleBtn = document.createElement("button");
        toggleBtn.classList.add("menu-toggle");
        toggleBtn.textContent = "☰"; // Icono hamburguesa
        navbar.prepend(toggleBtn); // Agrega el botón al inicio del navbar

        // Acción al hacer click en el botón
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                // Solo cierra si el menú está activo (visible en móvil)
                if (menu.classList.contains("active")) {
                    menu.classList.remove("active");
                }
            });
        });
    }

    // ==============================
    //  Animaciones suaves al hacer scroll
    // ==============================
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150; // distancia antes de activarse

            if (elementTop < windowHeight - revealPoint) {
                reveals[i].classList.add("active");
            } else {

                reveals[i].classList.remove("active");
            }
        }
    }

    // Ejecutar la función al cargar la página
    revealOnScroll();

    // Ejecutar la función al hacer scroll
    window.addEventListener("scroll", revealOnScroll);
});