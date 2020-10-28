const express = require ('express'); // webserver 

const app = express();
const port = 3000;

app.use(function(req, res, next) {  // middleware 
        console.log("mid test")
        next()


})


app.get('/', function (req, res, next) {  // middleware 
    console.log("mid test")
    next()


})