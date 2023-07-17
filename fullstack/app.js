let express = require ('express');
let app = express(); // making object of express, accessing express methods
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.port || 6500;

// default route
app.get('/',(req,res)=> {  // / is default
    res.send('Hi From Express');
})

app.get('/test',(req,res)=> {
    res.send('Test Route');
})

app.listen(port,(err)=>{
    if(err) throw err;
    else {
        console.log(`server is running on ${port} `)
    }
});