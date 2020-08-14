let fs = require('fs')
let fsp = fs.promises
let path = require('path')
const { S_IFIFO } = require('constants')

function fileP(dirPath){
  let fullDirPath = path.resolve(dirPath)
  let fullNames

  return fsp.readdir(fullDirPath)
  .then((names) => {
    fullNames = names.map(name => path.join(fullDirPath,name))
    let ary = fullNames.map(fsp.stat)
    return Promise.all(ary)
  })
  .then(infos => {
    let ary = infos.map((info,i) => {
      if(info.isFile()){
        return fullNames[i]
      }else if(info.isDirectory()){
        return fileP(fullNames[i])
      }
    })
    return Promise.all(ary)
  }).then(filesArr => {
    let result = [].concat(...filesArr)
    return result
  })
}

// function fileP2(dirPath,cb)

fileP('./test2').then(files => {
  console.log(files)
}).catch(e => {
  console.log(e)
})
