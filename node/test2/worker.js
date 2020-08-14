
// for (var i = 0; i < 100; i++) {
//   deadLoop(1000)
//   console.log(1)
// }
// function deadLoop(t) {
//   var start = Date.now()
//   while(Date.now() - start < t) {

//   }
// }

addEventListener('message', function(event) {
  debugger
  var data = event.data
  var result = Math.sqrt(data)
  postMessage(result)
})

// function sqrt(num) {
//   for (var i = 0; i < num; i+= 0.000001) {
//     if (Math.abs(i * i - num) < 0.01) {
//       return i
//     }
//   }
//   // return Math.sqrt(num)
// }


