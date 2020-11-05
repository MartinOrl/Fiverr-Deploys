const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(favicon(path.join(__dirname,'public','favicon.ico')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/main.html'))
})

app.listen(process.env.PORT, (req,res) => {
    console.log("Server is running on port")
})