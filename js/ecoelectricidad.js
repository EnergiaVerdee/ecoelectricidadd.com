// Efecto de fade-in cuando se hace scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-element');
    const screenPosition = window.innerHeight / 1.3;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if (position < screenPosition) {
            element.classList.add('fade-in-active');
        }
    });
});

// Mostrar y ocultar resultados de ahorro
function showSavings() {
    const savingsResult = document.getElementById("savings-result");
    savingsResult.classList.toggle("hidden");
}

// Carrusel de testimonios (simple)
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Cambiar de slide cada 3 segundos
showSlide(currentSlide);
