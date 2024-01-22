const nav = document.getElementById('nav');
const openBtn = document.getElementById('open-nav');
const closeBtn = document.getElementById('close-nav');  
const navLinks = document.querySelectorAll('.nav-list a');  
        
const toggleMenu = () => {
    nav.classList.toggle("visible");
}

navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
// window.addEventListener('wheel', toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
    const cardContainers = document.querySelectorAll('.card-footer');

    // Número máximo de estrellas
    const maxStars = 5;

    // Iterar sobre cada contenedor de tarjetas y generar las estrellas
    cardContainers.forEach(function (cardContainer) {
        // Valoración aleatoria de ejemplo
        const userRating = Math.floor(Math.random() * maxStars) + 1;

        generateRatingStars(cardContainer, maxStars, userRating);
    });
});

function generateRatingStars(container, maxStars, userRating) {
    // Generar estrellas
    for (let i = 1; i <= maxStars; i++) {
        const star = document.createElement('span');
        star.innerHTML = '&#9733;'; // Estrella sólida
        star.className = 'star';

        // Valoración aleatoria
        if (i <= userRating) {
            star.classList.add('rated');
        }

        container.appendChild(star);
    }
}
