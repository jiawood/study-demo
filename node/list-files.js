let fs = require('fs')
let path = require('path')

// function listFiles1(dirPath){
//   let result = []
//   let fullDirPath = path.resolve(dirPath)
//   //let fullDirPath = path.join(process.cwd(),dirPath)
//   let fileNames1 = fs.readdirSync(fullDirPath)
//   for(let fileName of fileNames){
//     let filePath = path.join(fullDirPath,fileName)
//     let stat = fs.statSync(filePath)
//     if(stat.isFile()){
//       result.push(filePath)
//     }else{
//       result.push(...listFiles1(filePath))
//     }
//   }
//   return result
// }

// function listFiles2(dirPath){
//   let result = []
//   let fullDirPath = path.resolve(dirPath)
//   //let fullDirPath = path.join(process.cwd(),dirPath)
//   let fileNames1 = fs.readdirSync(fullDirPath,{withFileTypes:true})
//   for(let fileName of fileNames){
//     let filePath = path.join(fullDirPath,fileName)

//     if(fileName.isFile()){
//       result.push(filePath)
//     }else if(fileName.isDirectory()){
//       result.push(...listFiles2(filePath))
//     }
//   }
//   return result
// }



// let res = listFiles1('./test2')
// console.log(res)






//基于回调的模式
// function listFilesCB(dirPath,cb){
//   let res = []
//   let fullDirPath = path.resolve(dirPath)
//   let count = 0
//   fs.readdir(fullDirPath,(err,names) => {
//     for(let name of names){
//       let fullName = path.join(fullDirPath,name)

//       fs.stat(fullName,(err,stat) => {
//         if(stat.isFile()){
//           res.push(fullName)
//           count++
//           if(names.length == count){
//             cb(null,res)
//           }
//         }else if(stat.isDirectory()){
//           listFilesCB(fullName,(err,files) => {
//             res.push(...files)
//             count++
//             if(names.length == count){
//               cb(null,res)
//             }
//           })
//         }
//       })
//     }
//   })
// }
var count = 0

function listFilesCB(dirPath, cb) {
  debugger
  let result = []
  let fullDirPath = path.resolve(dirPath)

  fs.readdir(fullDirPath, (err, names) => {
    for (let name of names) {
      let fullName = path.join(fullDirPath, name)

      fs.stat(fullName, (err, stat) => {
        if (stat.isFile()) {
          result.push(fullName)
          count++
          if (count == names.length) {
            cb(null, result)
          }
        } else if (stat.isDirectory()) {
          listFilesCB(fullName, (err, files) => {
            result.push(...files)
            count++
            if (count == names.length) {
              cb(null, result)
            }
          })
        }
      })

    }
  })
}



listFilesCB('./test2',(err,files) =>{
  console.log(files)
})

