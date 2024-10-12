const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const UserModel = require('./modules/blog')

mongoose.connect("mongodb://localhost:27017/Sirius",).then((result)=>{
    app.listen(3000)
}).catch((error)=>{
    console.log(error)
})

app.set('view engine', 'ejs')
app.set('views', 'views')  // Set this to 'views'







app.use(express.static('public'))
app.use(morgan('dev')); 
let name 




function addUSer(name,age,schools){
   
    Users = new UserModel({
        name :name,
        age : age,
        schools : schools,
    })
  
       Users.save().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
       
      
}


function getUsers(){
      
    UserModel.find({}).then((users)=>{
        for(let us of users){
       name = us.name
       console.log(name)
        }
       
    }).catch((error)=>{
        console.log(error)
       
    }) 
}

function getUserById(id){
      
    UserModel.findById(id).then((result)=>{
        console.log(result)
    })
}


app.use((req,res,next)=> {
   

    // addUSer('miss u', 30,['i dont know'])
    getUserById('670a87fa9d55f38b568b5574')

    next()
//    Users.save().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
//     next()
})


app.get('/', function (req, res) {
  res.status(200).render('index',{name : name})
   



})

app.get('/contact',  (req, res) => {
    res.status(200).render('contact')
 
})

app.get('/contact-me', function (req, res) {
    res.status(200).redirect('/contact')

})

app.use((req,res)=> {
    res.status(404).render('404')

})





