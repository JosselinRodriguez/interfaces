const nombrescompletos = document.getElementById("myname");
const cedula = document.getElementById("identification");
const usuario = document.getElementById("user");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const contraseña = document.getElementById("password");
const contraseña2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
});

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombrescompletos.value.length < 1 || nombrescompletos.value.trim() == "") {
        mostrarMensajeError("myname", " Introduce tus nombres correctamente*");
        condicion = false;


    }
    if (
        cedula.value.length != 10 ||
        cedula.value.trim() == "" ||
        isNaN(cedula.value)
    ) {
        mostrarMensajeError("identification", "Introduce tu numero de cedula correctamente*");
        condicion = false;


    }
    if (usuario.value.length < 1 || usuario.value.trim() == "") {
        mostrarMensajeError("user", "Introduce un usuario valido*");
        condicion = false;
    }

    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Introduce un Correo valido*");
        condicion = false;
    }
    if (
        celular.value.length != 10 ||
        celular.value.trim() == "" ||
        isNaN(celular.value)
    ) {
        mostrarMensajeError("mobile", "Introduce numero de Celular valido*");
        condicion = false;
    }
    if (contraseña.value.length < 1 || contraseña.value.trim() == "") {
        mostrarMensajeError("password", "Introduce una Contraseña valida*");
        condicion = false;
    }
    if (contraseña2.value != contraseña.value) {
        mostrarMensajeError("repeatPassword", "Introduce una Contraseña sin error*");
        condicion = false;
    }
    if (!terminosYcondiciones.checked) {
        mostrarMensajeError("termsAndConditions", "Aceptar*");
        condicion = false;
    } else {
        mostrarMensajeError("termsAndConditions", "");
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Muy Bien su informacion se guardo exitosamente.";
}