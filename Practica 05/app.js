const express =  require ('express');
const bodyParser =  require ('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.sendfile("index.html");
});

app.post('/user', (req, res)=> {
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = " +user_name+", password is"+password);
    res.json({'status':'OK'});
});

app.listen(3000, () => {
    console.log('Started PORT 3000');
})