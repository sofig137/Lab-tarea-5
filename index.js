const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('public'))

app.listen(8000, function(){
    console.log('Estoy en el puerto 8000 UWU')
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
