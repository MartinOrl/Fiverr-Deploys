const express = require('express');
const cors = require('cors');
const path = require('path')
const compression = require('compression')

const app = express();

const port = process.env.PORT || 5000;

app.use(compression())

app.use(cors())
app.use("/public",express.static("public"))


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/home/home.html"))
})
app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/about/about.html"))
})
app.get('/produkte', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/produkte/produkte.html"))
})
app.get('/kontakt', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/kontakt/kontakt.html"))
})


app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port)
})