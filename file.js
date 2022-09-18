const fs = require("fs");

// fs.writeFileSync('file.txt','hello program')
// fs.appendFileSync('file.txt'," i am C")
// fs.appendFileSync('file.txt',". language")
fs.writeFile('file.txt','hello program , i am hasan ',function(err){
if(err) throw err;
console.log("saved")
})

fs.appendFile('file.txt','i am developer',function(err){
    if(err) throw err;
    console.log("saved");
})