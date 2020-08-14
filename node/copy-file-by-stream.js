let fs = require('fs')

let rs = fs.createReadStream('factor.js')
let ws = fs.createWriteStream('copy-factor.js')

//以下所有的过程相当于:
rs.pipe(ws)

rs.on('data', data => {
  //如果读入数据的时候，数据超过缓冲区的最大值，读入过程暂停
  if(ws.write(data) === false) {
    rs.pause()
  }
})

//之前写入ws的缓冲区中的数据已经被ws处理完毕的时候触发
ws.on('drain', () => {
  rs.resume()
})

//ws中不会再出来新的数据时触发
rs.on('end', () => {
  ws.end()
})


//给文件压缩后再写入  compressStream
let zlib = require('zlib')

let compressStream = zlib.createGzip()

let rs = fs.createReadStream('factor.js')
let ws = fs.createWriteStream('copy-factor.js')

rs.pipe(compressStream)
compressStream.pipe(ws)

ReadableStream.prototype.pipe = (writeable) => {
  let readable = this
  readable.on('data', data => {
    //如果读入数据的时候，数据超过缓冲区的最大值，读入过程暂停
    if(writeable.write(data) === false) {
      readable.pause()
    }
  })

  //之前写入ws的缓冲区中的数据已经被ws处理完毕的时候触发
  writeable.on('drain', () => {
    readable.resume()
  })

  //ws中不会再出来新的数据时触发
  readable.on('end', () => {
    writeable.end()
  })
  return writeable
}


