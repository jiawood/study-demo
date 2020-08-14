let figlet = require('figlet')

let bigHelloWorld = figlet.text('hello world','Pebbles',(err,res)=> {
  if(err){
    console.log('something get wrong...')
    console.dir(err)
  }
  // console.log(res)
})

// let bigHelloWorld = figlet.textSync('bye world','Pebbles')

// console.log(bigHelloWorld)


function figletP(text,options){
  return new Promise((resolve,reject) => {
    return figlet.text(text,options,(err,res) => {
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    })
  })
}

async function foo(){

let text = await figletP('hahah',{font:'Efti Italic'})
console.log(text)
}

foo()

