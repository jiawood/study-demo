let fsp = require('fs').promises
let fs = require('fs')
let util = require('util')
const { readFileSync } = require('fs')

fsp.readFile('factor.js').then(res => {console.log(res)},reason => {console.log(reason)})

async function main() {
  let content = await fsp.readFile('factor.js')
  console.log(content)
}

fs.readFileSync('./factor.js')

fs.readFile('factor.js','utf8',(err,res) => {
  if(err){
    console.log(err)
  }else{
    console.log(res)
  }
})

function promiseify(f){
  return function(...args){
    return new Promise((resolve,reject) => {
      f(...args,(err,res)=> {
        if(err){
          reject(err)
        }else{
          resolve(res)
        }
      })
    })
  }
}

function callbackify(f) {

  return function(...args){
    let cb = args.pop()
    f(...args).then(result => {
      cb(null,result)
    },reason => {
      cb(reason)
    })
  }
}
