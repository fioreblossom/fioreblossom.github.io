// Moving Title (single page)
let docTitle = "CV Page x Argentina Programa x Fiorella Caruso ";
let waiting = 100;

function brandTitle() {
    document.title = docTitle;
    docTitle = docTitle.substring(1, docTitle.length) + docTitle.charAt(0);
    waiting = setTimeout("brandTitle()", waiting);
}
brandTitle();
// Off

// Validation Form:
const nombre = document.getElementById("name");
const email = document.getElementById("mail");

const error = document.getElementById("wrong");
error.style.color = "papayawhip";
error.style.backgroundColor = "purple";


function formSend() {

    let mensajesError = [];

    if (nombre.value === null || nombre.value === "") {
        mensajesError.push("•¡ATENCIÓN! Necesitas ingresar tu nombre para envíar éste formulario•")
    }

    if (email.value === null || email.value === "") {
        mensajesError.push("•SE REQUIERE UNA DIRECCIÓN DE CORREO ELECTRÓNICO•")
    }

    error.innerHTML = mensajesError.join(" - - - - - - - - - - ");

    return false;
}
//Off

// Cat Api:
const URL = "https://api.thecatapi.com/v1/images/search";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById("imgApi");
        img.src = data[0].url;
    });
