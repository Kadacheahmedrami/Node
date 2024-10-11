const fs = require('fs');

// fs.readFile('./hello.txt',(err,data)=>{

//     if(err)
//     {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// fs.writeFile('./hello1.txt','hello 3am 3am',()=>{
//     console.log('file writing')
// })
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(error)=>{
    if(error){
       console.log(error)

    }
    console.log('created folder succesfully')
})}
else{
    fs.rmdir("./assets",(error)=>{
        if(error){
            console.log(error)
        }
        console.log('deleting the folder')
    })
}


if(fs.existsSync('./hello1.txt')){
 fs.unlink('./hello1.txt',(error)=>{
    if(error)
    {
        console.log(error)
    }
  
 })
}