const express = require('express');
const cors = require('cors');
const path = require('path')
const compression = require('compression')

const app = express();

const port = process.env.PORT || 5000;

app.use(compression())

app.use(cors())
app.use("/public",express.static("public"))


app.get('/mmm', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/mmm/index.html"))
})
app.get('/pickle', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/pickle/pickle.html"))
})

app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port)
})