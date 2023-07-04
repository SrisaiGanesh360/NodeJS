// os is inbuilt
let os = require('os')
console.log(os.platform()) // win32
console.log(os.arch()) // 64
console.log(os.cpus().length + "core") // 8core
console.log(os.freemem()) // 14663110656 bytes
console.log(os.uptime()) // 329886.828 seconds
