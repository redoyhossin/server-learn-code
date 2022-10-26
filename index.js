const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const Port = process.env.Port || 5000;

const productdata = require('./Data/product.json');

app.get('/', (req, res) => {
    res.send('now servar running');
});

app.get('/allproduct', (req, res) => {
    res.send(productdata)
})



app.listen(Port, () => {
    console.log('runnin servar') 
});

module.exports = app;


