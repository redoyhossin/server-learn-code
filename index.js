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
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const singleproduct = productdata?.find((p) => p.id == id);
    if (!singleproduct) {
        res.send('No data found');
    }
    res.send(singleproduct);
});



app.listen(Port, () => {
    console.log('runnin servar') 
});

module.exports = app;


