const fs = require('fs');


const readStream = fs.createReadStream('./big.txt',{encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./hello1.txt');


// readStream.on('data',(chunck    )=>{
//     console.log('\n\n new chunck :\n\n')
//     console.log(chunck)
//     writeStream.write('\n\n New chunk :\n\n ')
//     writeStream.write(chunck)
// })

readStream.pipe(writeStream)