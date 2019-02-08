const express = require('express');
const app = express();

var alumnos = [
    { "id": 1, "name": "Alfonso", "age": "25", "career": "Informatica", "semester": "10" },
    { "id": 2, "name": "Giobani", "age": "24", "career": "Computacion", "semester": "10" },
    { "id": 3, "name": "Abimael", "age": "28", "career": "Informatica", "semester": "9" },
    { "id": 4, "name": "Luis Angel", "age": "23", "career": "Computacion", "semester": "8" },
    { "id": 5, "name": "Cecy", "age": "20", "career": "Diseño Grafico", "semester": "2" }
];

function buscaAlumno(nombre) {
    var existe = -1;
    for (i = 0; i < alumnos.length; i++) {
        if (alumnos[i].name == nombre) {
            existe = i;
            break;
        }
        return existe;
    }
}

app.get('/alumnos', (req, res) => {
    res.json(alumnos);
});

app.get('/alumnos/:nombre', (req, res) => {
    console.log('Consultado alumno: ');
    console.log(req.params.nombre);
    var encontrado = buscaAlumno(req.params.nombre);
    if (encontrado != -1) {
        console.log('Encontrado');
        res.send('<h3>' + req.params.nombre + '</h3>');
        res.json(alumnos[encontrado]);
        
    }
    else {
        console.log('No encontrado');
        res.status(404);
        res.end();
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Tarea hacer un express con dos llamadas post, el server con /alumnos y que regrese el json con lista de alumnos
// localhost/alumnos/:id solo regresar el alumno