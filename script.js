// ==============================
//  Animaciones suaves al hacer scroll
// ==============================
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

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

// Ejecutar al cargar y al hacer scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
