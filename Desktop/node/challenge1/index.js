// CREATE AN EXPRESS APP THAT SERVES AN IMAGE ON A SPECIF ENDPOINT 
const path = require('path');

const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('images'));


/* app.get('/', function (req, res) {  

    const fileName = path.resolve(_dirname, 'images/index.html')
    res.send(fileName);
})
*/ 
app.get('/meditation', function (req, res) {  

    // send file here



    const fileName = path.resolve(__dirname, 'images/meditation.jpg')
    res.sendFile(fileName);
})


app.listen(port, function(){
 console.log(`Running on  http://localhost:${port}`);

});
