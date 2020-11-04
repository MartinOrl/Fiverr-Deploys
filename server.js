const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/main.html'))
})

app.listen(3030, (req,res) => {
    console.log("Server is running on port", process.env.PORT)
})