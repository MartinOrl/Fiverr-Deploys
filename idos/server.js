const express = require('express');
const cors = require('cors');
const path = require('path')
const compression = require('compression')

const app = express();

const port = process.env.PORT || 5000;

app.use(compression())

app.use(cors())
app.use("/public",express.static("public"))



app.get('/staking', (req,res) => {
    res.sendFile(path.join(__dirname + "/staking/staking.html"))
})

app.get('/create-ido', (req,res) => {
    res.sendFile(path.join(__dirname + "/create_ido/create_ido.html"))
})

app.get('/idos', (req,res) => {
    res.sendFile(path.join(__dirname + "/idos_list/idos_list.html"))
})


app.get('/invest', (req,res) => {
    res.sendFile(path.join(__dirname + "/invest/invest.html"))
})




app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port)
})