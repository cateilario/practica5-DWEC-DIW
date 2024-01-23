export const generateStars = (container, maxStars, userRating) => {
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
