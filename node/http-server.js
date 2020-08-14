let http = require('http')
let path = require('path')
let fs = require('fs')

let PORT = 8080

let baseDir = path.resolve(__dirname,'./test2')  //默认要打开的文件

let server = http.createServer((req, res) => {

  let url = decodeURIComponent(req.url)
  let targetPath = path.join(baseDir,url)

  //如果目标路径不是我们给的基本路径,直接返回
  if(!targetPath.startsWith(baseDir)){
    res.write(401)
    res.end('401 Unauthorized')
    return
  }

  //先判断当前文件夹下的文件的文件类型，如果读不到说明文件错误，如果是文件，那么将文件读出来，然后返回给浏览器
  //如果是文件夹
  fs.stat(targetPath, (err,stat) =>{
    if(err){
      res.writeHead(400)
      res.end('File Not Find')
    }else{
      if(stat.isFile()){
        fs.readFile(targetPath,(err,content) => {
          if(err){
            res.end(err)
          }else{
            res.end(content)
          }
        })
      }else if(stat.isDirectory()){
        //如果是文件夹，那么在文件夹里面找index.html,然后把里面的内容给显示出来
        let indexPath = path.join(targetPath,'index.html')
        fs.readFile(indexPath,(err,content) => {
          if(err && err.code=='ENOENT'){
            res.writeHead(200,{
              'Content-Type':'text/html;charset=UTF-8'
            })
            fs.readdir(targetPath,{withFileTypes:true},(err,entries) => {
              let html = entries.length ? entries.map(entry => {
                let slash = entry.isDirectory() ? '/' : ''
                let stat = fs.statSync(path.join(targetPath,entry.name))
                return `
                <tr>
                  <td style="text-align: right">${stat.size}B</td>
                  <td><a href="${entry.name + slash}">${entry.name + slash}</a></td>
                </tr>
                `
              }).join('') : 'nothing in this directory'

              html = `
                <h1>Index of ${url}</h1>
                <table>${html}</table>
                <footer>Node.js ${process.version} / My <a href="https://github.com/xiaojaja">haha</a>Server Running</footer>
              `
              res.write(html)
              res.end()
            })
          }else{
            content.end(content)
          }
        })
      }
    }
  })
})

server.listen(PORT,() => {
  console.log('server listening on port')
})
