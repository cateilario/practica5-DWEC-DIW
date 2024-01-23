const myForm = document.querySelector('#contact-form');
const name = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');
const termsCheckbox = document.querySelector('#policy');
const submitBtn = document.querySelector('#submit-btn');

const modalBox = document.getElementById("modal-window");
const errors = document.querySelector('#errors');
const closeModalBtn = document.getElementById('close-modal');

let errorMessage = [];

const validate = e => {
    // Evitar que se envíe el formulario
    e.preventDefault();

    // Volver a vaciar el array de errores
    errorMessage = [];

    regExName = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;
    // VALIDACIONES
    // Nombre como campo obligatorio y con caracteres válidos
    name.value.trim().length === 0 && errorMessage.push('El nombre es un campo obligatorio.'); 
    !regExName.test(name.value.trim()) && errorMessage.push('El nombre no tiene caracteres válidos.');
    !regExName.test(lastName.value.trim()) && errorMessage.push('El apellido no tiene caracteres válidos.');
    
    // Correo electrónico válido
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && errorMessage.push('Introduce un correo eléctronico válido.');
    
    // Mensaje como campo obligatorio
    message.value.trim().length < 5 && errorMessage.push('Introduzca un breve mensaje para procesar su consulta con más agilidad');
    
    // Checkbox obligatorio
    !termsCheckbox.checked && errorMessage.push('Debes aceptar la política de privacidad');


    // Enviar o mostrar mensajes
    if(errorMessage.length === 0 && confirm("¿Desea enviar el formulario?")){
        myForm.submit();
        myForm.reset();
    } else if (errorMessage.length > 0) {
        modalBox.style.display = "block";
        errors.textContent = "";

        errorMessage.forEach(message => {
            const list = document.createElement('li');
            list.textContent = message;
            errors.appendChild(list);
            // errores.innerHTML += `<li>${mensaje}</li>`;
        });

        const closeModal = () =>{
            modalBox.style.display = "none";
        };

        closeModalBtn.addEventListener("click", closeModal);
        setTimeout(closeModal, 5000);

        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //       modal.style.display = "none";
        //     }
        // }
    };
};

myForm.addEventListener('submit', validate);