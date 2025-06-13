// Carrusel de imágenes del héroe
let currentSlide = 1;
const totalSlides = document.querySelectorAll('.hero-slide').length;

function changeSlide() {
    // Ocultar el slide actual
    document.querySelector('.hero-slide.active').classList.remove('active');
    
    // Calcular el siguiente slide
    currentSlide = (currentSlide % totalSlides) + 1;
    
    // Mostrar el nuevo slide
    document.querySelector(`.hero-slide:nth-child(${currentSlide})`).classList.add('active');
}

// Cambiar slide cada 3 segundos
setInterval(changeSlide, 3000);

// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
