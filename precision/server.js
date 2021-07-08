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

app.get('/landscape', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/landscape/landscape.html"))
})

app.get('/the-fool', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/the-fool/the-fool.html"))
})

app.get('/video-copy', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/video-page/video-page.html"))
})

app.get('/mmm', (req, res) => {
    res.sendFile(path.join(__dirname + "/client/mmm/index.html"))
})




app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port)
})