// Menú Hamburguesa
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-responsive'); // Agregamos la clase 'menu-responsive'
    menu.classList.toggle('active'); // Alternamos la clase 'active' para mostrar/ocultar
}

// Carrusel Automático
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');

function autoSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(autoSlide, 3000);
