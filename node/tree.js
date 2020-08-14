//将文件夹内的文件以排列的打印出来

var fs = require('fs')
var path = require('path')

var entryDir = path.resolve('.')

tree('./test2')

function tree(dirPath,depth = 0){
  let fullDirPath = path.resolve(dirPath)
  let fileEntries = fs.readdirSync(fullDirPath,{withFileTypes:true})
  for(let fileEntry of fileEntries){
    if(fileEntry.isFile()){
      console.log('  '.repeat(depth)+fileEntry.name)
    }else if (fileEntry.isDirectory()){
      console.log('  '.repeat(depth) + fileEntry.name + '/')
      tree(path.join(fullDirPath,fileEntry.name),depth+1)
    }
  }
}
