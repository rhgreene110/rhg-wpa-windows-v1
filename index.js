const express = require("express");
const path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, '127.0.0.1', ()=>{
 console.log("server started at port:" + port);
});