const http = require('http');
const fs = require("fs");



const server = http.createServer((req , res)=>{

    let path= './'

    switch(req.url){
        case'/':
            path+= 'index.html'
            res.statusCode =200
            break
        case'/contact':
            path+= 'contact.html'
            res.statusCode =200
            break
        case'/contact-me':
            res.statusCode =301
            res.setHeader('Location','/contact')
            return res.end()
            
            break
        default:
            path+='404.html'
            res.statusCode =404
            break
    }

    console.log('request made')
    // console.log(req.url,req.method)
   res.setHeader("content-Type",'text/html');
  
   fs.readFile(path,(error,data)=>{
    if(error){
        console.log(error)
    
    }else{
       // console.log(data)
       //res.write(data)
       
        res.end(data)
    }
    })

  
});

server.listen(3000,'localhost',()=>{

    console.log('listening for request on port 3000')
})