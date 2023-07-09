let http = require('http');

// req is what we send to server, it has params, queryParams, body 
// res is what server send in return

let server = http.createServer((req,res)=>{
    res.write('<h1>This is NodeJs Server Code</h1>');
    res.end();
});

server.listen(7600); // sever.listen(port) port is the adderess
