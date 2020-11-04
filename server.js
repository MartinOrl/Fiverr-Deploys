const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/main.html'))
})

app.listen(process.env.PORT, (req,res) => {
    console.log("Server is running on port")
})