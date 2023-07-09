// fs stands for fiel system
let fs = require('fs');

// fs.writeFile('mycode.txt', 'We are using express', (err)=>{  // non reqritten code, fs.writeFile('mycode.txt', 'This is my node data', (err)=>{
//     if(err) throw err;
//     console.log('Task done');
// })

// fs.appendFile('mytext.txt', 'Code from Node FS \n',(err)=>{  // /n to print in next line 
//     if(err) throw err;
//     console.log('File appended');
// })

// fs.readFile('city.json','utf-8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// let data = fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'}) // in readFIleSync it tries to read data step by step
// console.log(data);

// let data1 = fs.readFileSync('mytext.txt',{encoding:'utf-8',flag:'r'})
// console.log(data1);

// fs.unlink('mycode.txt',(err)=>{  // delete file
//     if(err) throw err;
//     console.log('file deleted');
// })

fs.rename('mytext.txt', 'myfile.xml',(err)=>{
    if(err) throw err;
    console.log('file renamed');
})

