let net = require('net')

let count = 0
let id = setInterval(() => {
  console.log(count)
},1000)
setTimeout(() => {
  server.close()
},10000)
let server = net.createServer(conn => {
  count++
  console.log('some one comes...')
})

server.listen(9090, () => {
  console.log('listening on port', 9090)
})

id.unref() //有什么用？
