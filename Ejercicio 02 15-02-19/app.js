const express = require('express');
const app = express();
const archivos = require('fs');
var alumnos = [];

//DB Handler
var db = {
    //Indicar BD o abrir conexion
    initDB: function () {
        //alternativa 1
        //this.alumnos = require("./alumnos.json");

        //alternativa 2
        var fs = require("fs");
        var contents = fs.readFileSync("./alumnos.json");
        this.alumnos = JSON.parse(contents);
    },

    //Busqueda Alumno
    getAlumnoBy: function (filter, value) {
        console.log("filtro: " + filter + "valor: " + value);
        var selected = null;
        this.alumnos.forEach(alumno => {
            console.log(alumno);
            console.log(alumno[filter]);
            if (alumno[filter] == value) {
                selected = alumno;
                return selected;
            }
        });
        return selected;
    }
}

function escribirarchivo() {
    archivos.writeFileSync('alumnos.json', JSON.stringify(alumnos),
        function (error) {
            if (error) {
                console.log('Hubo un error al escribir en el archivo')
                console.log(error);
            }
        });
}

app.get('/alumnos', (req, res) => {
    db.initDB();
    res.json(db.alumnos);
});

app.get('/alumnos/:nombre', (req, res) => {
    db.initDB();
    var nombre = req.params.nombre;
    var alumno = db.getAlumnoBy('Nombre', nombre);
    res.json(alumno);
});

app.post('/alumnos', (req, res) => {
    console.log('Agregando usuario...');
    console.log(req.body);
    console.log(req.body);
    //req.body.id = alumnos.length + 1;
    alumnos.push(req.body);
    escribirarchivo();
    res.json({ agregado: 'ok' });
});

app.post('/alumnos', (req,res) =>{
    db.initDB();
    var alumno = req.body;
    console.log('Objeto post recibido');
    console.log(req.body);
    db.alumno.push(alumno);
    db.saveAlumnos();
    res.json({'status:': 'OK'})
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});