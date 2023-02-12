import { guardarConfirmacion } from "./post.js";

let mensaje = document.getElementById("mensaje");

const validacion = (nombre, acompañante, telefono, musica) => {

    if( nombre.trim().length === 0 || acompañante.trim().length === 0 || telefono.trim().length === 0 || musica.trim().length === 0) {
        mensaje.innerHTML = "Favor de llenar todos los campos";
        mensaje.style.color = '#BD2A2E';
    } else {

        mensaje.innerHTML = "";
    }

    if(!document.querySelector('input[name="confirmacion"]:checked')){
        mensaje.innerHTML = "Por favor informanos si podrás asistir eligiendo alguna de las opciones.";
        mensaje.style.color = '#BD2A2E';
    }
}

document.getElementById("enviar").addEventListener("click", (event) => {
    event.preventDefault();

    const inputNombre = document.getElementById("nombre").value; 
    const inputAcompañante = document.getElementById("acompanante").value;
    const inputTelefono = document.getElementById("telefono").value;
    const inputMusica = document.getElementById("musica").value;
    let inputConfirmacion = "";
   
    validacion(inputNombre, inputAcompañante, inputTelefono, inputMusica);

    if(document.getElementById("confirmacion").checked){
        inputConfirmacion = document.getElementById("confirmacion").value;
    }
    if(document.getElementById("ausencia").checked){
        inputConfirmacion = document.getElementById("ausencia").value;
    }
    
    let _datos = {
        nombre: inputNombre,
        acompañante: inputAcompañante, 
        telefono: inputTelefono,
        musica: inputMusica,
        confirmacion: inputConfirmacion
    }
    console.log(_datos);

    guardarConfirmacion(_datos);

    document.getElementById('form').reset();
});