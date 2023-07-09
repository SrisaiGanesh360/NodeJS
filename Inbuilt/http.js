let http = require('http');

// req is what we send to server, it has params, queryParams, body 
// res is what server send in return

let server = http.createServer((req,res)=>{
    res.write('<h1>This is NodeJs App Server Code</h1>');
    res.end();
});

server.listen(7200); // sever.listen(port) port is the adderess
