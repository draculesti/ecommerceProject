// ==========================
// FORMULARIO
// ==========================

const registroForm = document.getElementById("registroForm");

// ==========================
// INPUTS
// ==========================

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// ==========================
// MENSAJES DE ERROR
// ==========================

const errorNombre = document.getElementById("errorNombre");
const errorTelefono = document.getElementById("errorTelefono");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");

const mensajeGeneral =
document.getElementById("mensajeGeneral");

// ==========================
// MOSTRAR / OCULTAR PASSWORD
// ==========================

const togglePassword =
document.getElementById("togglePassword");

const toggleConfirmPassword =
document.getElementById("toggleConfirmPassword");

// Mostrar / Ocultar contraseña

togglePassword.addEventListener("click", () => {

    const icon =
    togglePassword.querySelector("i");

    if (password.type === "password") {

        password.type = "text";

        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");

    } else {

        password.type = "password";

        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");

    }

});

// Mostrar / Ocultar confirmar contraseña

toggleConfirmPassword.addEventListener("click", () => {

    const icon =
    toggleConfirmPassword.querySelector("i");

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");

    } else {

        confirmPassword.type = "password";

        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");

    }

});

// ==========================
// SOLO NUMEROS TELEFONO
// ==========================

telefono.addEventListener("input", () => {

    telefono.value =
    telefono.value.replace(/\D/g, "");

});

// ==========================
// FUNCIONES AUXILIARES
// ==========================

function mostrarError(input, elemento, mensaje) {

    input.classList.remove("is-valid");
    input.classList.add("is-invalid");

    elemento.textContent = mensaje;

}

function mostrarCorrecto(input, elemento) {

    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

    elemento.textContent = "";

}

function limpiarValidaciones() {

    mensajeGeneral.innerHTML = "";

    const inputs = [
        nombre,
        telefono,
        email,
        password,
        confirmPassword
    ];

    inputs.forEach(input => {

        input.classList.remove(
            "is-valid",
            "is-invalid"
        );

    });

}

// ==========================
// VALIDACION
// ==========================

registroForm.addEventListener("submit", (event) => {

    event.preventDefault();

    limpiarValidaciones();

    let formularioValido = true;

        // ======================
    // NOMBRE
    // ======================

    const nombreRegex =
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;

    if (!nombreRegex.test(nombre.value.trim())) {

        mostrarError(
            nombre,
            errorNombre,
            "El nombre debe contener al menos 3 letras y solo puede incluir letras y espacios. Ejemplo: Juan Pérez."
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(
            nombre,
            errorNombre
        );

    }

    // ======================
    // TELEFONO
    // ======================

    const telefonoRegex =
    /^\d{10}$/;

    if (!telefonoRegex.test(telefono.value)) {

        mostrarError(
            telefono,
            errorTelefono,
            "El teléfono debe contener exactamente 10 dígitos. Ejemplo: 5512345678."
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(
            telefono,
            errorTelefono
        );

    }

    // ======================
    // EMAIL
    // ======================

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {

        mostrarError(
            email,
            errorEmail,
            "Ingresa un correo válido. Ejemplo: correo.prueba@gmail.com."
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(
            email,
            errorEmail
        );

    }

    // ======================
    // PASSWORD
    // ======================

    if (password.value.length < 8) {

        mostrarError(
            password,
            errorPassword,
            "La contraseña debe contener al menos 8 caracteres."
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(
            password,
            errorPassword
        );

    }

    // ======================
    // CONFIRM PASSWORD
    // ======================

    if (password.value !== confirmPassword.value) {

        mostrarError(
            confirmPassword,
            errorConfirmPassword,
            "Las contraseñas no coinciden. Verifica que ambas sean iguales."
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(
            confirmPassword,
            errorConfirmPassword
        );

    }

    if (!formularioValido) {

        return;

    }

        // ======================
    // OBTENER USUARIOS
    // ======================

    let usuarios =
    JSON.parse(
        localStorage.getItem("users")
    ) || [];

    // ======================
    // CORREO DUPLICADO
    // ======================

    const correoExiste =
    usuarios.some(usuario =>
        usuario.email.toLowerCase() ===
        email.value.trim().toLowerCase()
    );

    if (correoExiste) {

        mostrarError(
            email,
            errorEmail,
            "Ya existe una cuenta registrada con este correo electrónico. Utiliza otro correo o inicia sesión."
        );

        return;

    }

    // ======================
    // NUEVO USUARIO
    // ======================

    const nuevoUsuario = {

        nombre: nombre.value.trim(),

        telefono: telefono.value.trim(),

        email: email.value.trim(),

        password: password.value

    };

    // ======================
    // AGREGAR USUARIO
    // ======================

    usuarios.push(
        nuevoUsuario
    );

    // ======================
    // GUARDAR JSON
    // ======================

    localStorage.setItem(
        "users",
        JSON.stringify(usuarios)
    );

    // ======================
    // MENSAJE EXITO
    // ======================

    mensajeGeneral.innerHTML = `
        <div class="alert alert-success">
            <strong>¡Registro exitoso!</strong><br>
            Tu cuenta ha sido creada correctamente.<br>
            Serás redirigido al inicio de sesión en 3 segundos...
        </div>
    `;

    registroForm.reset();

    // ======================
    // REDIRECCION
    // ======================

    setTimeout(() => {

        window.location.href =
        "login.html";

    }, 3000);

});