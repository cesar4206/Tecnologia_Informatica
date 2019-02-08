const express = require('express');
const app = express();
/*
app.get('/:name', (req, res) => {
    console.log(req.params.name);
    console.log(req.params['name']);
    res.send('<h3> Hello ' + req.params.name + '</h3>');
});*/

app.get('/json', (req, res) => {
    res.json( { 'name': 'César' } );
});

app.post('/json', (req, res) => {
    res.json( { 'name': 'Castro' } );
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});


//Tarea hacer un express con dos llamadas post, el server con /alumnos y que regrese el json con lista de alumnos
// localhost/alumnos/:id solo regresar el alumno