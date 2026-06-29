// ==========================
// FORMULARIO
// ==========================

const loginForm = document.getElementById("loginForm");

// ==========================
// INPUTS
// ==========================

const email = document.getElementById("email");
const password = document.getElementById("password");

// ==========================
// MENSAJES
// ==========================

const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const mensajeGeneral = document.getElementById("mensajeGeneral");

// ==========================
// MOSTRAR / OCULTAR PASSWORD
// ==========================

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    const icon = togglePassword.querySelector("i");

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
        email,
        password
    ];

    inputs.forEach(input => {

        input.classList.remove(
            "is-valid",
            "is-invalid"
        );

    });

}

// ==========================
// LOGIN
// ==========================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    limpiarValidaciones();

    let formularioValido = true;

        // ======================
    // EMAIL
    // ======================

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {

        mostrarError(
            email,
            errorEmail,
            "Ingresa un correo válido."
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

    if (password.value.trim() === "") {

        mostrarError(
            password,
            errorPassword,
            "Ingresa tu contraseña."
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(
            password,
            errorPassword
        );

    }

    if (!formularioValido) {

        return;

    }

    // ======================
    // OBTENER USUARIOS
    // ======================

    const usuarios =
    JSON.parse(
        localStorage.getItem("users")
    ) || [];

    // ======================
    // BUSCAR USUARIO
    // ======================

    const usuarioEncontrado =
    usuarios.find(usuario =>

        usuario.email.toLowerCase() ===
        email.value.trim().toLowerCase()

    );

    if (!usuarioEncontrado) {

        mostrarError(
            email,
            errorEmail,
            "No existe una cuenta registrada con este correo."
        );

        return;

    }

    // ======================
    // VALIDAR PASSWORD
    // ======================

    if (
        usuarioEncontrado.password !==
        password.value
    ) {

        mostrarError(
            password,
            errorPassword,
            "La contraseña ingresada es incorrecta."
        );

        return;

    }

    // ======================
    // USUARIO ACTIVO
    // ======================

    localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuarioEncontrado)
    );

    // ======================
    // MENSAJE EXITO
    // ======================

    mensajeGeneral.innerHTML = `
        <div class="alert alert-success">
            <strong>¡Bienvenido a Mixtecalt!</strong><br>
            Inicio de sesión exitoso.<br>
            Redirigiendo...
        </div>
    `;

    loginForm.reset();

    // ======================
    // REDIRECCION
    // ======================

    setTimeout(() => {

        window.location.href =
        "../index.html";

    }, 1500);

});