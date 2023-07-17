let express = require ('express');
let app = express(); // making object of express, accessing express methods
let port = 6500;

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
        console.log('server is running on port 6500')
    }
});