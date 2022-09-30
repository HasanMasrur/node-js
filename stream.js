
const fs = require('fs');
console.log(`${__dirname}`);

const ourReadStream = fs.createReadStream(`${__dirname}/file.txt`)

ourReadStream.on('data',(chunk)=>{
    console.log('worikign');
    console.log(chunk);
})