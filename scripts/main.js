import { generateStars } from "./generateStars.js";
import { myForm, validateForm } from "./validateForm.js";

const nav = document.getElementById('nav');
const openBtn = document.getElementById('open-nav');
const closeBtn = document.getElementById('close-nav');  
const navLinks = document.querySelectorAll('.nav-list a');  
const cardContainers = document.querySelectorAll('.card-footer');

const toggleMenu = () => {
    nav.classList.toggle("visible");
};

navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
    // Número máximo de estrellas
    const maxStars = 5;
    // Iterar sobre cada contenedor de tarjetas y generar las estrellas
    cardContainers.forEach(cardContainer => {
        // Valoración aleatoria de ejemplo
        const userRating = Math.floor(Math.random() * maxStars) + 1;
        generateStars(cardContainer, maxStars, userRating);
    });
});

myForm.addEventListener('submit', validateForm);
