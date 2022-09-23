const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('i am home route');
        res.end();
    }else if (req.url == '/about'){
        res.write('i am about route');
        res.end();
    }else{
res.write('not found');
res.end();
    }
   
});

server.listen(3005);
console.log('listening on port 3005');