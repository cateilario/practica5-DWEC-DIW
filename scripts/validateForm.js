export const myForm = document.querySelector('#contact-form');
const name = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');
const termsCheckbox = document.querySelector('#policy');
// const submitBtn = document.querySelector('#submit-btn');

const modalBox = document.getElementById("modal-window");
const errors = document.querySelector('#errors');
const closeModalBtn = document.getElementById('close-modal');

let errorMessage = [];

export const validateForm = e => {
    e.preventDefault();

    errorMessage = [];

    const regExName = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;
    // VALIDACIONES
    // Nombre como campo obligatorio y con caracteres válidos
    name.value.trim().length === 0 && errorMessage.push('El nombre es un campo obligatorio'); 
    if(name.value) !regExName.test(name.value.trim()) && errorMessage.push('El nombre contiene caracteres inválidos');
    lastName.value.trim().length === 0 && errorMessage.push('El apellido es un campo obligatorio'); 
    if(lastName.value) !regExName.test(lastName.value.trim()) && errorMessage.push('El apellido contiene caracteres inválidos');
    // Correo electrónico válido
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && errorMessage.push('El correo eléctronico contiene caracteres inválidos');
    // Teléfono como campo obligatorio
    phone.value.trim().length === 0 && errorMessage.push('El teléfono es un campo obligatorio');
    if(phone.value) !/^[0-9]{8,15}$/.test(phone.value.trim()) && errorMessage.push('El teléfono introducido no es válido');
    // Mensaje como campo obligatorio
    message.value.trim().length < 5 && errorMessage.push('Introduzca un breve mensaje para procesar su consulta');
    // Checkbox obligatorio
    !termsCheckbox.checked && errorMessage.push('Debes aceptar la política de privacidad');

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
        });

        const closeModal = () =>{
            modalBox.style.display = "none";
        };

        closeModalBtn.addEventListener("click", closeModal);
        setTimeout(closeModal, 6000);

        document.addEventListener('click', (e) =>{
            if (e.target === modalBox) closeModal();
        });
    };
};
