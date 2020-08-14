let {Readable, Writable, Duplex, Transform} = require('stream')

var i = 0

let myReadable = new Readable({
  highWaterMark: 65536,
  read() {
    i++
    console.log('generating data')
    this.push(String(i).repeat(10))
  }
})


let myWritable = new Writable({
  highWaterMark:1024,
  write(chunk,encoding,cb) {

  }
})

myReadable.on('data',data => {
  console.log(data)
})
