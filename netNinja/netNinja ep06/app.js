const express = require('express')
const app = express()




app.get('/', function (req, res) {
    res.status(200).sendFile('./index.html', {root : __dirname})
   
})

app.get('/contact', function (req, res) {
    res.status(200).sendFile('./contact.html', {root : __dirname})
 
})

app.get('/contact-me', function (req, res) {
    res.status(200).redirect('/contact')

})

app.use((req,res)=> {
    res.status(404).sendFile('./404.html', {root : __dirname})

})

app.listen(3000)


let path= './'


