import config from "./config.js";

const apiHost = config.api.host;

export const guardarConfirmacion = (_datos) => {
    return fetch(`http://${apiHost}/invitados`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

 