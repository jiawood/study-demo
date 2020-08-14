let numStr = process.argv[2]
console.log(process.argv)
let num = Number(numStr)
let res = factor(num)
console.log(res.join(' '))

function factor(num){
  if(num <= 3){
    return num
  }
  let res = []
  let isOver = true
  while(num > 3){
    for(let i = 2; i <= num / 2 | 0; i++){
      if(num % i == 0){
        res.push(i)
        num = num / i
        isOver = false
      }
    }
    if(isOver){
      break
    }
    isOver = true
  }
  res.push(num)
  return res
}
