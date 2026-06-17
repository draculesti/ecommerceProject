const nombre = document.getElementById("nombreInput");
const correo = document.getElementById("emailInput");
const telefono = document.getElementById("telInput");
const mensaje = document.getElementById("mensajeInput");

const formButton = document.getElementById("formButton");
const seccionAlerta = document.getElementById("alertaSitio");

//Para validar nombre y email
const expName = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
const expEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const expTel = /^\+[1-9]\d{5,17}$/;

//Para añadir la alerta
const appendAlert = (message, type) => {
    seccionAlerta.innerHTML = `
        <div class="alert alert-${type}" role="alert">
            ${message}
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close">
            </button>
        </div>
    `;
};


formButton.addEventListener("click", (e)=>{

    e.preventDefault();
    //Validar los campos
    let errores = [];

    if(nombre.value.trim() === ""){
        errores.push("Nombre");
    }

    if(!expName.test(nombre.value)){
        errores.push("El nombre solo puede contener letras.");
    }

    if(correo.value.trim() === "" || !expEmail.test(correo.value)){
        errores.push("Correo electrónico");
    }

    if(telefono.value.trim() === ""){
        errores.push("Telefono");
    }

    if(!expTel.test(telefono.value)){
        errores.push("El formato del telefono no es válido.");
    }

    if(mensaje.value.trim() === ""){
        errores.push("Mensaje");
    }

    if(errores.length > 0){
        appendAlert(
            `Revise los siguientes campos: ${errores.join(", ")}`,
            "warning"
        );
        return;
    }

    else{
        //FUNCIÓN DEL CORREO
        const templateParams = {
            nombre: nombre.value,
            correo: correo.value,
            telefono: telefono.value,
            mensaje: mensaje.value
        };

        emailjs.send(
            "service_bk7k02h",
            "template_sgnb35o",
            templateParams
        )
        .then(() => {

            appendAlert(
                'Datos válidos. Su mensaje ha sido enviado',
                'success'
            );

            nombre.value = "";
            correo.value = "";
            telefono.value = "";
            mensaje.value = "";

        })
        .catch((error) => {

            appendAlert(
                'Error al enviar el correo',
                'danger'
            );

            console.error(error);

        });
    }
    
});