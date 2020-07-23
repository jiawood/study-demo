let net = require("net")

let server = net.createServer()

let port = 80

let msgs = [
  {
    name:'Lily',
    content:'bye',
    time:'7-13 18:51'
  },
  {
    name:'xiaojne',
    content:'world',
    time:'7-13 18:52'
  }
]

server.on('connection', conn => {
  conn.on('data', data => {
    let d = data.toString()
    console.log(d.split('\r\n\r\n')[1].split('\r\n')[0])
    // let lines = d.split('\r\n\r\n')
    // let firstLine = lines.shift()
    // let firstLinePart = firstLine.split(' ')
    // let method = firstLinePart[0]
    // let path = firstLinePart[1]
    let method = d.split('\r\n\r\n')[0].split('\r\n')[0].split(" ")[0]
    console.log(method)
    let path = d.split('\r\n\r\n')[1].split('\r\n')[0]
    // console.log(path)
    // msg.push({name:method,content:path})


    if(method === 'POST'){
      let data = parseQueryString(path)
      let cc = new Date()
      let time = `${cc.getMonth()}-${cc.getDate()} ${cc.getHours()}:${cc.getMinutes() < 10 ? '0'+cc.getMinutes() :cc.getMinutes()}`
      data.time = time
      msgs.push(data)
      // console.log(data)

      //用get请求跳回首页
      conn.write('HTTP/1.1 302 Moved Templajfowiehf\r\n')
      conn.write('Location: /\r\n')
      conn.write('\r\n')
      conn.end()
      return
    }

    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type: text/html\r\n')
    conn.write('\r\n')
    conn.write(`
      <form method="POST" action="">
        Name: <input type="text" name="name">
        Massage: <textarea name="content"></textarea>
        Submit: <input type="submit">
      </form>
    `)
    msgs.reverse().forEach(msg => {
      conn.write(`
        <div>
          <h2>${msg.time}</h2>
         <h3>${msg.name.replace(/</g, '&lt;')}</h3>
         <p>${msg.content.replace(/</g, '&lt;')}</p>
        </div>
      `)
    });
    conn.end()
  })
  conn.on('error', () => {})
})

server.listen(port, () => {
  console.log('listening on port')
})

function parseQueryString(body){
  return body.split('&').reduce((res,data)=>{
    let [key,content] = data.split('=')
    res[key] = content

    return res
  },{})
}
