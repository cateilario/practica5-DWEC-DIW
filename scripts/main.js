const nav = document.getElementById('nav');
const openBtn = document.getElementById('open-nav');
const closeBtn = document.getElementById('close-nav');    
        
const toggleMenu = () => {
    nav.classList.toggle("visible");
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);