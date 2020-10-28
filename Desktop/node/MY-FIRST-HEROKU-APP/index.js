// CREATE AN EXPRESS APP THAT SERVES AN IMAGE ON A SPECIF ENDPOINT 

const express = require('express');

const app = express();
const port = process.env.PORT


 app.get('/', function (req, res) {  

    const fileName = port (_dirname, 'images/index.html')
    res.send(fileName);
})



app.use(express.static('images'));
