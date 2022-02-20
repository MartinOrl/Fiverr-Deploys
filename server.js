const express = require('express');
const cors = require('cors');
const path = require('path')
const compression = require('compression')

const app = express();

const port = process.env.PORT || 5000;

app.use(compression())

app.use(cors())

app.use("/public", express.static("public"));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','home.html'))
})

app.get('/store', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','store.html'))
})

app.get('/myNFTs', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','myNFTs.html'))
})

app.get('/create', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','create.html'))
})

app.get('/admin', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','admin.html'))
})

app.get('/item', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','item.html'))
})

app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port)
})
        