const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
});

connection.connect();

const getInvitados = (request, response) => {
  connection.query('SELECT id, nombre, acompañante, telefono, musica FROM invitados WHERE confirmacion="S" ORDER BY id ASC', (error, results) => {
    if (error) {
      //throw error;
      console.log(error);
      response.status(500).json({
        message: "error"
      })
      return;
    }
    response.status(200).json(results.map( invitado => invitado ));
  });
};

const createInvitado = (request, response) => {
  const { nombre, acompañante, telefono, musica, confirmacion } = request.body;

  connection.query(
    'INSERT INTO invitados SET nombre=?, acompañante=?, telefono=?, musica=?, confirmacion=?',
    [nombre, acompañante, telefono, musica, confirmacion],
    (error, results) => {
      if (error) {
        //throw error;
        console.error(error);
        response.status(500).json({message: 'internal server error'});
      }
      response.status(201).json({mensaje: "creado"});
    }
  );
};

module.exports = {
  getInvitados,
  createInvitado,
};
