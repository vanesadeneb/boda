const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// public route will be used to server the static content
app.use("/", express.static("ui-confirmation/"));

app.get("/confirmados", function(req, res) {
    res.redirect("/confirmados.html");
});

const db = require('./api-confirmation/queries');


app.get('/api', (request, response) => {
  response.json({ message: 'Ok' });
});

app.get('/api/invitados', db.getInvitados);
app.post('/api/invitados', db.createInvitado);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

