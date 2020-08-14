let path = require('path')
let fs = require('fs')


let targetPath = path.join(path.resolve(),'./test')
// let res = fs.readdirSync(targetPath,{withFileTypes:true})
// console.log(res)
let result = []
let count = 0
fs.readdir(targetPath,(err,res)=>{

    result.push(res)
    count++
    console.log(res)
})


