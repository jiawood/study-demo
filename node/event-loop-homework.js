async function async1(){
  console.log('async1 start')  // 3
  await async2()
  console.log('async1 end')  // 8
}

async function async2(){
  console.log('async2')  // 4
}

console.log('script start')   // 1

setTimeout(function(){
  console.log('setTimeout0') // 11
},0)

setTimeout(function(){
  console.log('setTimeout3')  //12
},3)

setImmediate(() => console.log('setImmediate')); // 10

process.nextTick(() => console.log('nextTick'));  // 2

async1();

new Promise(function(resolve){
  console.log('promise1')  // 5
  resolve();
  console.log('promise2')  // 6
}).then(function(){
  console.log('promise3')  // 9
})

console.log('script end')  // 7
