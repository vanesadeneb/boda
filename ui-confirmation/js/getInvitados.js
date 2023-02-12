import config from "./config.js";

const apiHost = config.api.host;
const response = await fetch(`http://${apiHost}/invitados`);
let data = await response.json();

const show = (data) => {
    let tab = 
        `<tr id="encabezados">
            <th>Nombre</th>
            <th>Acompañante</th>
            <th>Teléfono</th>
            <th>Música</th>
         </tr>`;
    
    for (let row of data) {
        tab += `<tr> 
            <td>${row.nombre} </td>
            <td>${row.acompañante}</td>
            <td>${row.telefono}</td> 
            <td>${row.musica}</td>          
        </tr>`;
    }

    document.getElementById("invitados").innerHTML = tab;
}

show(data);
