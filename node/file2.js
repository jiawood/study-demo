//使用回调函数来读取文件夹以及其内容
let path = require('path')
let fs = require('fs')

function listFilesCB2(dirPath, cb) {
  let result = []
  let fullDirPath = path.resolve(dirPath)

  fs.readdir(fullDirPath, {withFileTypes: true}, (err, fileInfos) => {
    if (err) {
      console.log(err)
      return
    }

    var count = 0
    if (count == fileInfos.length) {
      cb(null, result)
    }
    for (let fileInfo of fileInfos) {
      let fullName = path.join(fullDirPath, fileInfo.name)

      if (fileInfo.isFile()) {
        result.push(fullName)
        count++
        if (count == fileInfos.length) {
          cb(null, result)
        }
      } else if (fileInfo.isDirectory()) {
        listFilesCB2(fullName, (err, files) => {
          result.push(...files)
          count++
          if (count == fileInfos.length) {
            cb(null, result)
          }
        })
      }
    }

  })
}

listFilesCB2('./test2', (err, files) => {
  console.log(files)
})
