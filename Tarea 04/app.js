const express =  require ('express');
const bodyParser =  require ('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.sendfile("index.html");
});

app.post('/user', (req, res)=> {
    var cve=req.body.clave;
    var name=req.body.nombre;
    console.log("Clave = " +cve+", name is"+name);
    res.json({'status':'OK'});
});

app.listen(3000, () => {
    console.log('Started PORT 3000');
})