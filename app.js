const express = require("express")
const app = express()
const port = 3000

app.set('views','./views');
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render('index',{
        name : "Yusril",
        umur : 20,
        buah : [
            {name : "Apel"},
            {name : "Mangga"}
        ]
    });
});

app.get("/:name",(req,res)=>{
    res.send(`Nama saya : ${req.params.name}`);
});

app.listen(port,()=>{
    console.log(`Applikasi sudah jalan di http://localhost:${port}`);
});