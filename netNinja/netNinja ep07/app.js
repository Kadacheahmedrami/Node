const express = require('express')
const app = express()



app.set('view engine', 'ejs')
app.set('views', 'views')  // Set this to 'views'
app.listen(3000)

let name = 'hitle1'

app.get('/', function (req, res) {
  res.status(200).render('index',{name : name})
   
})

app.get('/contact', function (req, res) {
    res.status(200).render('contact')
 
})

app.get('/contact-me', function (req, res) {
    res.status(200).redirect('/contact')

})

app.use((req,res)=> {
    res.status(404).render('404')

})





