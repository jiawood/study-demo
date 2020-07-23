function all(promises) {
  return new Promise((resolve,reject) => {
    let res = new Array(promises.length)
    let count = 0

    if(promises.length){
      for(let i = 0; i < promises.length; i++){
        let promise = promises[i]
        promise.then(value => {
          res[i] = value
          count++
          if(count == promises.length){
            resolve(res)
          }
        }, reason => {
          reject(reason)
        })
      }
    }else{
      resolve([])
    }

  })
}
