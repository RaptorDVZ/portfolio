const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get('/index.css', (req,res)=>{
    res.sendFile(__dirname+"/index.css");
})

app.get('/div.html', (req,res)=>{
    res.sendFile(__dirname+"/div.html");
})


app.listen(3000, ()=>{
    console.log(`The server has started at port ${port}`);
})